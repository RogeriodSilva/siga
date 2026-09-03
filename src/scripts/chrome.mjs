//Abre e fecha o SidePanel da extensão
chrome.sidePanel
      .setPanelBehavior({ openPanelOnActionClick: true })
      .catch((error) => console.log(error));


export {}