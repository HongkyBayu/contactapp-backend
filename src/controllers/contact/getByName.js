/**
 * Represents the get method for contact model by name field
 */

import Contacts from '../../models/contact/Contacts';

const getContactByName = (request, reply) => {
  const { name } = request.params;
  const contactQuery = new RegExp(`${name}`);
  Contacts.find({ name: contactQuery })
    .then(contact => reply(contact))
    .catch((error) => {
      throw error;
    });
};

module.exports = {
  method: 'GET',
  path: '/contacts/{name}',
  handler: getContactByName,
};
