import dotenv from 'dotenv'
dotenv.config();
// import models from '../model';
// const otpModel = models.otp;
import winston from 'winston';
// import AWS from 'aws-sdk';

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: 'logger/debug.log',
    }),
  ],
});


// const sendOtp = async (title, body, fcm_token) => {
//   try {
//     const message = {
//       android: {
//         notification: {
//           title: title,
//           body: body,
//         },
//       },
//       token: fcm_token,
//     };

//     FCM.send(message, function(err, resp) {
//       if (err) {
//         throw err;
//       } else {
//         console.log('Successfully sent notification');
//       }
//     });
//   } catch (err) {
//     throw err;
//   }
// };

// const otp_msg = async (mobile_number, otp, fcm_token) => {
//   try {
//     const title = 'verification otp';
//     const body =
//       `${mobile_number} OTP is ${otp}. Please do not share it with anyone."\n` +
//       `Thanks,\n` +
//       `M-Grahak`;
//     sendOtp(title, body, fcm_token);
//   } catch (err) {
//     throw err;
//   }
// };

// const remainder_msg = async (fcm_token, businessName, apTime) => {
//   try {
//     const title = 'Appointment Remainder';
//     const body =
//       `Your ${businessName} appointment is on time ${apTime}.\n` +
//       `This is Reminder for you from MGrahak`;
//     sendOtp(title, body, fcm_token);
//   } catch (err) {
//     throw err;
//   }
// };

// const sendSMS = async (phoneNumber, message) => {
//   const params = {
//     Message: message,
//     PhoneNumber: phoneNumber,
//   };

//   try {
//     const result = await sns.publish(params).promise();
//     console.log('SMS sent:', result.MessageId);
//   } catch (error) {
//     console.error('Error sending SMS:', error);
//   }
// };

// const createOtp = async (mobile_number, fcm_token) => {
//   try {
//     function AddMinutesToDate(date, minutes) {
//       return new Date(date.getTime() + minutes * 60000);
//     }

//     function generateRandomNumber(min, max) {
//       return Math.floor(Math.random() * (max - min) + min);
//     }
//     const otp = generateRandomNumber(1000, 9999);
//     const now = new Date();
//     const otp_expiration_time = AddMinutesToDate(now, 10);

//     const createUser = {
//       mobile_number,
//       otp,
//       now,
//       otp_expiration_time,
//     };
//     await otpModel.create(createUser);

//     // aws sns
//     const phoneNumber = `+91 ${mobile_number}`;
//     const message = `Your verification OTP is ${otp}. Please do not share it with anyone."\n` +
//     `Thanks,\n` +
//     `M-Grahak`;

//     sendSMS(phoneNumber, message);

//     if (fcm_token == undefined) {
//       console.log('No need to call');
//     } else {
//       otp_msg(createUser.mobile_number, otp, fcm_token);
//     }
//   } catch (error) {
//     throw error;
//   }
// };

export default {logger
  // createOtp, 
  // remainder_msg
};
