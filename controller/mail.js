
const nodemailer = require("nodemailer");


async function mailSend(req, res) {

    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      // true for 465, false for other ports
      auth: {
        user: "ravi.koffeekodes@gmail.com", // generated ethereal user
        pass: "dkqlaeuhiwrdeajd", // generated ethereal password
      },
    });
    res.json({
        status: true
    })

  // send mail with defined transport object
  var mailOptions = {
    from: "ravi.koffeekodes@gmail.com", // sender address
    to: "ravisihare123@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    }
    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email Sent: " +info.response);
        }
    })
}
const mail = {
    mailSend
}
module.exports = mail;
