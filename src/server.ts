import Logger from './core/Logger';
import app from './app';

const port = 3000;

const createServer = async () => {
  app.listen(port, () => {
    Logger.info(`Server ready on port ${port}!! 🚴‍♀️🚴‍♀️`);
  });
};

createServer();
