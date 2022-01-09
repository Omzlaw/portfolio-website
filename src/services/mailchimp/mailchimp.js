const dotenv = require("dotenv");
dotenv.config();
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: process.env.API_KEY,
    server: process.env.SERVER_PREFIX,
});



class MailChimp {

    async addClients(message)  {
        const listId = "Clients";

        const response = await mailchimp.lists.setListMember(listId, {
            email_address: message.email,
            merge_fields: {
                FNAME: message.name,
            },
            status: "subscribed",
        });

        console.log(
            `Successfully added contact as an audience member. The contact's id is ${
            response.id
          }.`
        );
    }
}

module.exports = MailChimp;

