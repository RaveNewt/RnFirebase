import {firebase} from '@react-native-firebase/database';

const fireDb = firebase
  .app()
  .database(
    'https://rnapp-f713a-default-rtdb.us-central1.firebasedatabase.app/',
  );

export default fireDb;
