var nodemailer = require('nodemailer');

module.exports = class Email {
    createEmail(to="dmitri.delta@gmail.com", html = 'HTML'){
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                //host: 'smtp.gmail.com',
                //port: 465,
                //secure: true, // true for 465, false for other ports
                service:'gmail',
                auth: {
                    //type: 'OAuth2',
                    user: 'dmitri.delta@gmail.com', // generated ethereal user
                    pass: 'pavlino999' // generated ethereal password
                }
            });
        
            // setup email data with unicode symbols
            let mailOptions = {
                from: '"👻" <dmitri.delta@gmail.com>', // sender address
                to: to, // list of receivers
                subject: 'Hello ✔', // Subject line
                //text: 'Hello world?', // plain text body
                html: html // html body
            };
        
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log('hhhghhj', error);
                }
                console.log('Message sent: %s', info.messageId);
            });
        });
    }
    
}

