
const config = require('../../api/api.config');
const fs = require('fs');
const mustache = require('mustache');
const nodemailer = require('nodemailer');

const privates = {
    options: {
        template: 'DefaultTemplate',
        placeholder_text: [],
        placeholder_html: []
    },
}

const mailBuilderHelper = {
    setMailTemplate: (template) => {
        privates.options.template = template;
    },

    getHtmlCode: () => {
        var content = String(fs.readFileSync("./api/helpers/MailTemplates/" + privates.options.template + '.html'));
        var result = mustache.render(content, privates.options.placeholder_html);
        return result;
    },

    getPlainText: () => {
        var content = String(fs.readFileSync("./api/helpers/MailTemplates/" + privates.options.template + '.txt'));
        var result = mustache.render(content, privates.options.placeholder_text);
        return result;
    },

    addPlaceholder: (placeholder, value) => {
        if(placeholder.substr(0, 5) === 'text:') {
            placeholder = placeholder.substr(5);
            privates.options.placeholder_text[placeholder] = value;
        } else if(placeholder.substr(0, 5) === 'html:') {
            placeholder = placeholder.substr(5);
            privates.options.placeholder_html[placeholder] = value;
        } else {
            privates.options.placeholder_text[placeholder] = value;
            privates.options.placeholder_html[placeholder] = value;   
        }
    },

    sendMail: (toAddress, subject) => {
        let status = false;
        let transporter = nodemailer.createTransport(config.nodemailer.transport);
        transporter.verify(function(error, success) {
            if (!error) {
                // Create Mail Options
                let mailOptions = {
                    from: config.nodemailer.from,
                    to: toAddress,
                    subject: subject,
                    text: mailBuilderHelper.getPlainText(),
                    html: mailBuilderHelper.getHtmlCode()
                };

                // Send Mail
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    }
                });
            } else {
                console.log(error);
            }
         });
    }
};
  
module.exports = mailBuilderHelper;