const Firestore = require('../../src/services/firebase/firebase.utils');

const firestore = new Firestore;

class Client {
    

    addClient = (data) => {
        const result = firestore.add(data, 'clients', data.from);
    }
}

module.exports = Client;