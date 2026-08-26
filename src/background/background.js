const actionHandleMessage = {
      getUsername: async (param) => {
            console.log("AAAAAAAAAA");

            return { value: 1 + 1 };
      },
};

//
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      const { event, param } = message;

      console.log(event, param, 'oi')

      async () => {
            try {
                  const resultado = await actionHandlers[event]();
                  sendResponse({ sucess: true, data: { value: 1 + 1 } });
            } catch (error) {
                  console.error(`[OnMessageError] ${error}`);
                  sendResponse({ sucess: false, erro: error.message });
            }
      };
});

//
chrome.sidePanel
      .setPanelBehavior({ openPanelOnActionClick: true })
      .catch((error) => console.log(error));
