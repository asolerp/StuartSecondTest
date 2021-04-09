import mongoose from 'mongoose';
import Logger from '../core/Logger';

require('dotenv').config();

const {
  MONGO_NAME,
  MONGO_PORT,
  MONGO_HOST,
} = process.env;

// Build the connection
const dbURI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

Logger.debug(dbURI);

// Create connection
mongoose
  .connect(dbURI, options)
  .then(() => Logger.info('Mongoose connection done'))
  .catch((e) => {
    Logger.info('Mongoose connection error');
    Logger.error(e);
  });

// CONNECTION EVENTS
// Success
mongoose.connection.on('connected', () => Logger.info(`Mongoose default connection open to ${dbURI}`));

// Error
mongoose.connection.on('error', (err) => Logger.info(`Mongoose default connection error: ${err}`));

// Disconnected
mongoose.connection.on('disconnected', () => Logger.info('Mongoose default disconnected'));

process.on('SiGINT', () => {
  Logger.info('Mongoose default connection disconnected through app termination');
  process.exit(0);
});
