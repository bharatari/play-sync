var FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
};

export function setupDb() {
  firebase.initializeApp(FIREBASE_CONFIG);

  const db = firebase.firestore();

  return db;
}
