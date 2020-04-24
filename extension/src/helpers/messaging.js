export function sendToBrowser(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) chrome.tabs.sendMessage(tabs[0].id, message);
  });
}

export function sendToPopup(message) {
  chrome.runtime.sendMessage(message);
}

export function sendMessageToBackground(message) {
  chrome.runtime.sendMessage(message);
}
