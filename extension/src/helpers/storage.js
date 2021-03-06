class Storage {
  static set(key, value) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ key: value }, () => {
        resolve(value);
      });
    });
  }

  static get(key) {
    return new Promise((resolve) => {
      chrome.storage.local.get(key, (result) => {
        resolve(result[key]);
      });
    })
  }
}