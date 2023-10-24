const nodemailer = require('nodemailer')

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.forwardemail.net",
    port: process.env.SMTP_PORT || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER || "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
      pass: process.env.SMTP_PASS || "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
    },
  })

  const mailOptions = {
    from: 'youremail@gmail.com',
    to: process.env.EMAIL_TO || 'myfriend@yahoo.com',
    subject: 'Temperature Alert!',
    text: `Temperature exceeded the threshold! ${data}`
  }

  transporter.sendMail(mailOptions)
}

module.exports = sendEmail
