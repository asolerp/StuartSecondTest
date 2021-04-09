import mongoose, { mongo } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Logger from 'core/Logger';

const mongoServer: MongoMemoryServer = new MongoMemoryServer();

const opts: mongoose.ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connect = async () => {
  await mongoose.disconnect();

  const mongoUri = await mongoServer.getUri();
  mongoose.connect(mongoUri, opts, (err) => {
    if (err) {
      Logger.error(err);
    }
  });
};

// Remove and close the database and server.
const close = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};

// Remove all data from collections.
const clear = async () => {
  const { collections } = mongoose.connection;

  Promise.all(Object.keys(collections).map((key) => collections[key].deleteMany({})));
};

export default {
  connect,
  close,
  clear,
};
