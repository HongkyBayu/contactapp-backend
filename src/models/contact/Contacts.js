import mongoose from 'mongoose';

const { Schema } = mongoose;

const ContactSchema = new Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model('contactList', ContactSchema);
