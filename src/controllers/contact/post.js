/**
 * Represents the post method for contact model
 */

import Contacts from '../../models/contact/Contacts';

const addContact = async (request, h) => {
  const { name, email } = request.payload;
  const contacts = new Contacts({
    name,
    email,
  });
  await contacts.save({ name, email });
  return h.response().code(201);
};

module.exports = {
  method: 'POST',
  path: '/contacts',
  handler: addContact,
};
