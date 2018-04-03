var nodemailer = require('nodemailer');

module.exports = class Email {
    createEmail(to="dmitri.delta@gmail.com", html = 'HTML'){
        nodemailer.createTestAccount((err, account) => {
            
            let transporter = nodemailer.createTransport({
                
                service:'gmail',
                auth: {
                    
                    user: 'dmitri.delta@gmail.com',
                    pass: 'pavlino999' 
                }
            });
        
           
            let mailOptions = {
                from: '"👻" <dmitri.delta@gmail.com>', 
                to: to, 
                subject: 'Weather forecast for today ✔', 
                html: html 
            };
        
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent:');
            });
        });
    }
    
}

