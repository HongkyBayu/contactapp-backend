/**
 * Represents the post method for contact model
 */

import Boom from 'boom';
import Joi from 'joi';
import ContactSchema from '../../schema/contact/ContactSchema';
import Contacts from '../../models/contact/Contacts';

const addContact = async (request, h) => {
  const { name, email } = request.payload;
  const validate = Joi.validate({ name, email }, ContactSchema);

  if (validate.error) {
    return Boom.badRequest('Name and/or Email invalid');
  }

  const contacts = new Contacts({
    name: validate.value.name,
    email: validate.value.email,
  });

  try {
    await contacts.save();
    return h.response().code(201);
  } catch (err) {
    return Boom.badRequest();
  }
};

module.exports = {
  method: 'POST',
  path: '/contacts',
  handler: addContact,
};
