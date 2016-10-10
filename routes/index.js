var express = require('express'),
    router = express.Router();
var nodemailer = require('nodemailer');

/**
* send contact email
*/
router.post('/send', function (req, res, next) {

    console.log(" entering ");
    try {
        var transporter = nodemailer.createTransport('smtps://raji.contactable@gmail.com:(Raji)1234@smtp.gmail.com');

        // setup e-mail data with unicode symbols 
        var mailOptions = {
            from: '"Raji" <foo@blurdybloop.com>', // sender address 
            to: 'raji.contactable@gmail.com', // list of receivers 
            subject: 'Hello ✔', // Subject line 
            text: 'Hello world 🐴', // plaintext body 
            html: '<b>Hello world 🐴</b>' // html body 
        };

        // send mail with defined transport object 
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            res.send(200);
            console.log('Message sent: ' + info.response);
        });
    } catch (e) {
        console.log(" error " + e);
    }
});


module.exports = router;