/**
 * Represents the connection to the database
 */

import Mongoose from 'mongoose';

Mongoose.connect('mongodb://localhost/contactApp');
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connection with database succeeded.');
});
exports.db = db;
