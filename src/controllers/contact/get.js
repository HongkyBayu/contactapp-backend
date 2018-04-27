/**
 * Represents the routing for contact controller
 */

import Contacts from '../../models/contact/Contacts';

const getContacts = async (request, reply) => {
  Contacts.find((error, contacts) => {
    if (error) {
      console.log(error);
    }
    return reply(contacts);
  });
};

module.exports = {
  method: 'GET',
  path: '/contacts',
  handler: getContacts,
};
