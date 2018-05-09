/**
 * Represents the get method for contact model
 */

import Boom from 'boom';
import Contacts from '../../models/contact/Contacts';

const getContacts = async (request, h) => {
  try {
    const contactLists = await Contacts.find();
    if (contactLists.length === 0) {
      return Boom.notFound();
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
