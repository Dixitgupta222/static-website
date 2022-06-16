// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from:  req.body.email,
    to: 'Wekrypt@gmail.com',
    subject: `Message From ${req.body.fname}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>Hello Admin,<br/>
    Your received new query from customer :-<br/>
    First Name: ${req.body.fname}<br/>
    Last Name: ${req.body.lname}<br/>
    Mobile: ${req.body.number}<br/>
    Email: ${req.body.email}<br/>
    Message: ${req.body.message} </div>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}
