import { setupDb } from './helpers/firebase';

const db = setupDb();

function setupListener(partyId) {
  db.collection('parties')
    .doc(partyId)
    .onSnapshot((doc) => {
      sendToBrowser(doc.data());
      sendToPopup(doc.data());
    });
}

let partyId;

chrome.storage.local.get('partyId', ({ partyId: newPartyId }) => {
  partyId = newPartyId;
});

chrome.storage.onChanged.addListener((changes) => {
  partyId = changes.partyId.newValue;

  var partyRef = db.collection('parties').doc(partyId);

  sendToPopup(partyRef.toJSON());

  setupListener(partyId);
});

chrome.runtime.onMessage.addListener((request) => {
  var partyRef = db.collection('parties').doc(partyId);

  partyRef.set(request, { merge: true });
});

setupListener(partyId);
