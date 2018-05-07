/**
 * Represents the get method for contact model by name field
 */

import Contacts from '../../models/contact/Contacts';

const getContactByName = (request, h) => {
  const { name } = request.params;
  const contactQuery = new RegExp(name);
  Contacts.find({ name: contactQuery })
    .then(contact => h.response({ status: true, contact }))
    .catch(error => h.response({ status: false, error }));
};

module.exports = {
  method: 'GET',
  path: '/contacts/{name}',
  handler: getContactByName,
};
