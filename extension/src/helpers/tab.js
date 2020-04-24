class Tab {
  getCurrentTab() {
    return new Promise((resolve) => {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
        resolve(tab);
      });
    });
  }

  static async update(data) {
    const tab = await getCurrentTab();

    chrome.tabs.update(tab.id, data);
  }
}
