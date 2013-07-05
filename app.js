var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",  // sets automatically host, port and connection security settings
   auth: {
       user: "email@gmail.com",
       pass: "gmailPassword"
   }
});

smtpTransport.sendMail({  //email options
   from: "Sender Name <email@gmail.com>", // sender address.  Must be the same as authenticated user if using GMail.
   to: "Receiver Name <receiver@email.com>", // receiver
   subject: "Emailing with nodemailer", // subject
   text: "Email Example with nodemailer" // body
}, function(error, response){  //callback
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
   
   smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
});