const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()
const axios = require('axios')
const cors = require('cors')

const nodemailer = require("nodemailer");
require('dotenv').config( ) 
const { REACT_APP_EMAIL, REACT_APP_PASSWORD } = process.env

const PORT = process.env.PORT || 3030 


app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.get('/', (req, res) => res.send('mailer works'))

app.post('/mail', async(req,res) => {
  try{
      let transporter = nodemailer.createTransport({
          host : 'smtp.gmail.com',
          secure: true,
          auth : {
              user : REACT_APP_EMAIL,
              pass: REACT_APP_PASSWORD
          }
      });

      let body = `${req.body.text}, ${req.body.from}, ${req.body.first_name}, ${req.body.last_name}`
      console.log(body)
      let info = await transporter.sendMail({
        from: req.body.from,
        to: REACT_APP_EMAIL,
        subject: 'Portfolio Contact',
        text: body
      });
      console.log(req.body)

      console.log(info)
      res.send(info)
  } catch(error) {
      throw error
  }
})


// async function sendReminder(data){
//   try {

//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: REACT_APP_EMAIL,
//       pass: REACT_APP_PASSWORD
//     }
//   });

//   let info = await transporter.sendMail({
//     from: data.email, // sender address
//     to: REACT_APP_EMAIL, // list of receivers
//     subject: "portfolio CONTACT", // Subject line
//     text: data.subject, // plain text body
//   });

//   console.log("Message sent: %s", info.messageId);
//   } catch(err) {
//     console.log(err)
//   }

// }

// app.post('/mail', (req, res) => {
//   sendReminder(data)
// })

app.listen(PORT () => console.log(`listening on port ${PORT}`))