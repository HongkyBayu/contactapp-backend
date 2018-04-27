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
      console.log(error);
    }
    return reply(contacts.id);
  });
};

module.exports = {
  method: 'POST',
  path: '/contacts',
  handler: addContact,
};
