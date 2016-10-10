var express = require('express');
var nodemailer = require("nodemailer");
var express = express.Router();
var app = express();

app.use(express.static(__dirname + '/public'));

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "raji.contactable@gmail.com",
        pass: "(Raji)1234"
    }
});

router.post('/send',function(req, res, next){
	var transporter = nodemailer.createTransport({
		service : 'Gmail',
		auth :{
			user : 'raji.contactable@gmail.com',
			pass : '(Raji)1234'
		}
	});
	var mailOptions = {
		from : 'John Doe <johndoe@outlook.com>',
		to : 'raji.contactable@gmail.com',
		subject : 'test email',
		text : 'you have a new test email'
	};
	transporter.sendMail(mailOptions, function(err, info){
		if(error){
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Message sent');
			res.redirect('/');
		}
	});
});

module.exports = router;

var port = process.env.PORT || 8000;
app.listen(port);
