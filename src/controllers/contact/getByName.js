/**
 * Represents the get method for contact model by name field
 */

import Contacts from '../../models/contact/Contacts';

const getContactByName = (request, reply) => {
  const { name } = request.params;
  const contactQuery = new RegExp(name);
  Contacts.find({ name: contactQuery })
    .then(contact => reply({ status: true, contact }))
    .catch(error => reply({ status: false, error }));
};

module.exports = {
  method: 'GET',
  path: '/contacts/{name}',
  handler: getContactByName,
};
