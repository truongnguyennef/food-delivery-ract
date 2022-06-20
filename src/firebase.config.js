import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD5_lx6rNyuhpWoZO9hZ1803hRDknYeLRE",
    authDomain: "restauranapp-469b0.firebaseapp.com",
    databaseURL: "https://restauranapp-469b0-default-rtdb.firebaseio.com",
    projectId: "restauranapp-469b0",
    storageBucket: "restauranapp-469b0.appspot.com",
    messagingSenderId: "87711304190",
    appId: "1:87711304190:web:2c3fb47d0df4c3ce37d8af"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage };