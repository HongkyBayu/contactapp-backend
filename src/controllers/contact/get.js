/**
 * Represents the get method for contact model
 */

import Contacts from '../../models/contact/Contacts';

const getContacts = async (request, reply) => {
  Contacts.find((error, contacts) => {
    if (error) {
      return reply({ status: false, error: 'Failed to get contacts' });
    }
    return reply({ status: true, contactList: contacts });
  });
};

module.exports = {
  method: 'GET',
  path: '/contacts',
  handler: getContacts,
};
