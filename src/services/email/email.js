
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require('nodemailer');



class Mail {

    transporter = nodemailer.createTransport({
        // host: 'smtp.mailtrap.io',
        service: process.env.EMAIL_SERVICE,
        port: 2525,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    sendMail = (message) => {
        this.transporter.sendMail(message, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}


module.exports = Mail;