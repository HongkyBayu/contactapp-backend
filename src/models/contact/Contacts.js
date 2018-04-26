import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: String,
  email: String,
});

module.exports = mongoose.Model('contactApp', ContactSchema)
