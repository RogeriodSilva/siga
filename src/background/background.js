//Comunicação entre background e client(react)
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    alert(message);
});

//Armazena informações básica sobre a aba(tab) que foi aberta.
const handleUpdateStorage = async (param) => {
    let tab = await chrome.tabs.get(
        typeof param == "number" ? param : param.tabId,
    );

    if (!tab.url || !tab.url.startsWith("http")) {
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

        if (result) {
            name = result;
        }
    }

    await chrome.storage.local.set({
        currentTab: name === undefined ? {} : { tab, frames, name },
    });
};

chrome.tabs.onActivated.addListener(handleUpdateStorage);
chrome.tabs.onUpdated.addListener(handleUpdateStorage);

//Abre e fecha o SidePanel da extensão
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.log(error));
