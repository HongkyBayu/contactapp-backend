/**
 * Represents the post method for contact model
 */

import Contacts from '../../models/contact/Contacts';

const addContact = async (request, reply) => {
  const { name, email } = request.payload;
  const contacts = new Contacts({
    name,
    email,
  });
  contacts.save((error) => {
    if (error) {
      return reply({ status: false, error: 'Failed to save contact' });
    }
    return reply({ status: true, message: 'Save contact successful' });
  });
};

module.exports = {
  method: 'POST',
  path: '/contacts',
  handler: addContact,
};
