const {
    initializeApp,
    applicationDefault,
    cert
} = require('firebase-admin/app');
const {
    getFirestore,
    Timestamp,
    FieldValue
} = require('firebase-admin/firestore');


const serviceAccount = require('../../../keys/firebase/serviceAccountKey.json');

initializeApp({
    credential: cert(serviceAccount)
});

class Firestore {

    db = getFirestore();

    add = async (doc, collectionName, docId) => {
        console.log(doc);
        console.log(collectionName);
        console.log(docId);
        const docRef = this.db.collection(collectionName).doc(docId);
        await docRef.set(doc)
            .then((result) => {
                console.log(`${collectionName} created succesfully`);
                return result;
            })
            .catch((error) => {
                console.log(`Creation of ${collectionName} was not successful. ${error.message}`);
                return error;
            })
    }
}

module.exports = Firestore;