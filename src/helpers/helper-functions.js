import dotenv from 'dotenv'
dotenv.config();
import winston from 'winston';

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: 'logger/debug.log',
    }),
  ],
});


export default {logger};
