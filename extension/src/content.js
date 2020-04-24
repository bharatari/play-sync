import { syncStateToPlayer, syncHTML5PlayerToState } from './helpers/sync';

let currentPartyState;

function setupHTML5PlayerSync() {
  const video = document.getElementsByTagName('video')[0];

  syncHTML5PlayerToState(video);
}

function setupStateSync(request) {
  const player = getPlayer({ window }, request);

  syncStateToPlayer(player, currentPartyState, request);

  currentPartyState = request;
}

setTimeout(() => setupHTML5PlayerSync(), 10000);
chrome.runtime.onMessage.addListener(setupStateSync);
