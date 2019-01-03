import firebase from 'firebase';
import config from '../config/config';

firebase.initializeApp(config);

firebase.firestore().settings({
    timestampsInSnapshots: true
});

export default firebase;