/**
 * Represents the get method for contact model
 */

import Contacts from '../../models/contact/Contacts';

const getContacts = async (request, h) => {
  try {
    const contactLists = await Contacts.find();
    if (!contactLists) {
      return h.response().code(404);
    }
    return h.response(contactLists).code(200);
  } catch (error) {
    return error;
  }
}

module.exports = {
  method: 'GET',
  path: '/contacts',
  handler: getContacts,
};
