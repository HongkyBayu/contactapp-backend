import Joi from 'joi';

const ContactSchema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
});

module.exports = ContactSchema;
