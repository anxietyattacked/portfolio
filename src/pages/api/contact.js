export default async function (req, res) {
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
  
  console.log("EMAIL:", EMAIL)

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
  
  sendMail()
    .then((result) => console.log('Email sent...', result))
    .catch((error) => console.log(error.message));

    
  }

  // auth: {
  //   type: "OAuth2",
  //   user: process.env.USERNAME,
  //   clientId: process.env.EMAIL_CLIENT_ID,
  //   clientSecret: process.env.EMAIL_CLIENT_SECRET,
  //   refreshToken: process.env.REFRESH_TOKEN,
  //   accessToken: accessToken
  // }

  // const mailData = {
  //   from: process.env.USERNAME,
  //   to: process.env.USERNAME_2,
    // subject: `Message From ${req.body.name}`,
    // text: req.body.message + " | Sent from: " + req.body.email,
    // html: `<div>${req.body.message}</div><p>Sent from:
    // ${req.body.email}</p>`
  //  }


  // async function sendMail() {
  //   try {
  //     const accessToken = await oAuth2Client.getAccessToken();
  
      // const transport = nodemailer.createTransport({
      //   service: 'gmail',
      //   auth: {
      //     type: 'OAuth2',
      //     user: process.env.USERNAME,
      //     clientId: process.env.EMAIL_CLIENT_ID,
      //     clientSecret: process.env.EMAIL_CLIENT_SECRET,
      //     refreshToken: process.env.REFRESH_TOKEN,
      //     accessToken: accessToken,
      //   },
      // });
  
  //     const mailOptions = {
  //       from: process.env.USERNAME,
  //       to: process.env.USERNAME_2,
  //       subject: `Message From ${req.body.name}`,
  //       text: req.body.message + " | Sent from: " + req.body.email,
  //       html: `<div>${req.body.message}</div><p>Sent from:
  //       ${req.body.email}</p>`
  //      }
  
  //     const result = await transport.sendMail(mailOptions);
  //     return result;
  //   } catch (error) {
  //     return error;
  //   }
  // }
  
  // sendMail()
  //   .then((result) => console.log('Email sent...', result))
  //   .catch((error) => console.log(error.message));




  // let nodemailer = require('nodemailer')
  //   const {google} = require("googleapis")

  //   const OAuth2 = google.auth.OAuth2
  //   const createTransporter = async () => { 
  //     const oauth2Client = new OAuth2(
  //     process.env.EMAIL_CLIENT_ID,
  //     process.env.EMAIL_CLIENT_SECRET,
  //     process.env.REDIRECT_URI
  //   );
  //   oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

  //   const accessToken = await new Promise((resolve, reject) => {
  //     oauth2Client.getAccessToken((err, token) => {
  //       if (err) {
  //         reject("Failed to create access token :(");
  //       }
  //       resolve(token);
  //     });
  //   });

  //   const transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       type: 'OAuth2',
  //       user: process.env.USERNAME,
  //       clientId: process.env.EMAIL_CLIENT_ID,
  //       clientSecret: process.env.EMAIL_CLIENT_SECRET,
  //       refreshToken: process.env.REFRESH_TOKEN,
  //       accessToken: accessToken,
  //     },
  //   });
  //   return transporter;
  //   }
  //   const mailOptions = {
  //     from: process.env.USERNAME,
  //     to: process.env.USERNAME_2,
  //     subject: `Message From ${req.body.name}`,
  //     text: req.body.message + " | Sent from: " + req.body.email,
  //     html: `<div>${req.body.message}</div><p>Sent from:
  //     ${req.body.email}</p>`
  //    }

  //    const sendEmail = async (mailOptions) => {
  //     let emailTransporter = await createTransporter();
  //     await emailTransporter.sendMail(mailOptions);
  //   };
  //   sendEmail()



//   const OAuth2 = google.auth.OAuth2;

// const createTransporter = async () => {
//   const oauth2Client = new OAuth2(
//     process.env.EMAIL_CLIENT_ID,
//     process.env.EMAIL_CLIENT_SECRET,
//     "https://developers.google.com/oauthplayground"
//   );

//   oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN
//   });

//   const accessToken = await new Promise((resolve, reject) => {
//     oauth2Client.getAccessToken((err, token) => {
//       if (err) {
//         reject("Failed to create access token :(");
//       }
//       resolve(token);
//     });
//   });

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: process.env.USERNAME,
//       accessToken,
//       clientId: process.env.EMAIL_CLIENT_ID,
//       clientSecret: process.env.EMAIL_CLIENT_SECRET,
//       refreshToken: process.env.REFRESH_TOKEN
//     }
//   });

//   return transporter;
// };

// const sendEmail = async (emailOptions) => {
//   let emailTransporter = await createTransporter();
//   await emailTransporter.sendMail(emailOptions);
// };

// sendEmail({
//   subject: "Test",
//   text: "I am sending an email from nodemailer!",
//   to: process.env.USERNAME_2,
//   from: process.env.EMAIL
// });