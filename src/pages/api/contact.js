export default async function handler(req, res) {
  const nodemailer = require('nodemailer');
  const { google } = require('googleapis');
  require('dotenv').config()

  // These id's and secrets should come from .env file.
  const CLIENT_ID = process.env.EMAIL_CLIENT_ID
  const CLEINT_SECRET = process.env.EMAIL_CLIENT_SECRET
  const REDIRECT_URI = process.env.REDIRECT_URI
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN
  const EMAIL = process.env.EMAIL
  const EMAIL_TO = process.env.EMAIL_TO
  


  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI
  );
 oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  
    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
  
        const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: EMAIL,
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
          tls: {
            ciphers : 'SSLv3',
          }
         },
        });
  
        const mailOptions = {
        from: EMAIL,
        to: EMAIL_TO,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
        };
  
        const result = await transport.sendMail(mailOptions);
        return result;
      } catch (error) {
        return error;
      }
  }
  
    
    return sendMail().then((result) => res.status(200).json({ msg: "Works"})).catch((error) =>console.log(error.message));

  }
