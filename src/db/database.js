/**
 * Represents the connection to the database
 */

import Mongoose from 'mongoose';
import config from 'config';

Mongoose.connect(config.DBHost);
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  if (config.util.getEnv('NODE_ENV') === 'test') {
    console.log('Using test database config.');
  }
  if (config.util.getEnv('NODE_ENV') !== 'test') {
    console.log('Using dev database config.');
  }
});
exports.db = db;
