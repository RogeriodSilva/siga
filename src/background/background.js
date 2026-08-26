const currentTab = async () => {
  const [tab] = await chrome.tabs.query({ active: true });

  return tab;
};

chrome.runtime.onMessage.addListener(async ({ event, param }) => {
  const tab = await currentTab();

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    world: "MAIN",
    func: () => {
      console.log("pagiaaaaaaaaaaaaaaaa");
      alert("OKKKKKKKKKKK");
    },
  });
});

//
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
