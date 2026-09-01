const SIGAEvents = {
    framesFindThis: async (frame, data, parent = false) => {
        try {
            const [tab] = await chrome.tabs.query({
                lastFocusedWindow: true,
                active: true,
            });

            const [{ result }] = await chrome.scripting.executeScript({
                target: { tabId: tab.id, frameIds: [frame.id] },
                world: "MAIN",
                func: (data, inparent) => {
                    for (const props of data) {
                        if (inparent) {
                            if (parent[props] === undefined) {
                                return false;
                            }
                        } else {
                            if (window[props] === undefined) {
                                return false;
                            }
                        }
                    }
                    return true;
                },
                args: [data, parent],
            });

            return result;
        } catch (error) {}
    },
};

//
const handleSigaFunctions = {
    queryEvents: () => {
        const response = parent.ebfFlowExecute(
            "sNovoSinistroTarefasSelectEvento",
            parent.ebfListParamsCreate("", 1, 1000000000),
        );
        const { items } = JSON.parse(response);

        return items;
    },
};

//Comunicação entre background e client(react)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { event, param = null } = message;

    (async () => {
        try {
            const { currentTab } = await chrome.storage.local.get("currentTab");

            const [result] = await chrome.scripting.executeScript({
                target: { tabId: currentTab.tab.id },
                world: "MAIN",
                func: handleSigaFunctions[event],
                args: [param],
            });

            sendResponse({ status: "success", data: result });
        } catch (error) {
            console.error(`[ServiceContentError]: ${error.message}`);
            sendResponse({ status: "error", error: error.message });
        }
    })();

    return true;
});

//Armazena informações básica sobre a aba(tab) que foi aberta.
const handleUpdateStorage = async (param) => {
    let tab = await chrome.tabs.get(
        typeof param == "number" ? param : param.tabId,
    );

    if (!tab.url || !tab.url.startsWith("http")) {
        await chrome.storage.local.set({
            currentTab: {},
        });
        return;
    }

    let frames = (
        (await chrome.webNavigation.getAllFrames({ tabId: tab.id })) || []
    ).map((frame) => ({
        id: frame.frameId,
        parentId: frame.parentId,
        url: frame.url,
        type: frame.frameType,
        object: frame,
    }));

    let name = undefined;

    for (const frame of frames) {
        let [{ result }] = await chrome.scripting.executeScript({
            target: { tabId: tab.id, frameIds: [frame.id] },
            world: "MAIN",
            func: () => {
                const el = document.querySelector("#LblBemvindo label");
                if (!el && !el.textContent) return;
                return el.textContent.replace(/\s*\(.*?\)/, "").trim();
            },
        });

        if (result && result.trim() != "---") {
            name = result;
        }
    }

    await chrome.storage.local.set({
        currentTab: name === undefined ? {} : { tab, frames, name },
    });
};

chrome.tabs.onActivated.addListener(handleUpdateStorage);
// chrome.tabs.onUpdated.addListener(handleUpdateStorage);

//Abre e fecha o SidePanel da extensão
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.log(error));
