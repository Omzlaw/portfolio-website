const express = require('express');
const bodyParser = require('body-parser');
const Mail = require('../../src/services/email/email');
const MailChimp = require('../../src/services/mailchimp/mailchimp');
const Client = require('../../src/repository/Client');

// const app = express();
const mainRoutes = express.Router();
const mail = new Mail();
const mailchimp = new MailChimp();
const client = new Client();

const urlencodedParser = bodyParser.urlencoded({
    extended: false
})


mainRoutes.route('/')
    .get((req, res) => {
        res.render('index');
    })
    .post(urlencodedParser, (req, res) => {
        let message = {
            ...req.body,
            to: 'omeizaalabi@gmail.com'
        };
        mail.sendMail(message);
        client.addClient(message, 'clients', message.from);
        // mailchimp.addClients(message);
        res.render('thankyou');
    });

// mainRoutes.get('/thankyou', (req, res) => {
//     res.render('thankyou');
// });

module.exports = mainRoutes;
