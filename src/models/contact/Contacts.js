import mongoose from 'mongoose';

const { Schema } = mongoose;

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('contactList', ContactSchema);
