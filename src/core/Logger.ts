import { createLogger, transports, format } from 'winston';
import fs from 'fs';
import path from 'path';

let dir = process.env.LOG_DIRECTORY;
if (!dir) dir = path.resolve('logs');

// create directory if it is no present
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const logLevel = process.env.NODE_ENV === 'dev' ? 'debug' : 'warn';

export default createLogger({
  level: logLevel,
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.prettyPrint(),
    format.colorize(),
  ),
  transports: [
    new transports.File({
      dirname: dir,
    }),
    new transports.Console({
      format: format.combine(
        format.errors({ stack: true }),
        format.prettyPrint(),
        format.colorize(),
      ),
    }),
  ],
});
