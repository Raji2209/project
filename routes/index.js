var express = require('express'),
    router = express.Router();
var nodemailer = require('nodemailer');


router.get('/',function(req,res,next){
   res.render('index');

});

/**
* send contact email
*/
router.post('/send', function (req, res, next) {

    console.log(" entering ");
    try {
        var transporter = nodemailer.createTransport('smtps://'+process.env.EMAIL_USER+':'+process.env.EMAIL_PASSSWORD+'@smtp.gmail.com');

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
            res.render('index');
            console.log('Message sent: ' + info.response);
        });
    } catch (e) {
        console.log(" error " + e);
    }
});


module.exports = router;