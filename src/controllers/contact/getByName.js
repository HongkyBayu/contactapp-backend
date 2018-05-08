/**
 * Represents the get method for contact model by name field
 */

import Contacts from '../../models/contact/Contacts';

const getContactByName = async (request, h) => {
  const { name } = request.params;
  const contactQuery = new RegExp(name, 'i');

  try {
    const contactByName = await Contacts.find({ name: contactQuery });
    if (contactByName.length === 0) {
      return h.response().code(404);
    }
    return h.response(contactByName).code(200);
  } catch (error) {
    return error;
  }
};

module.exports = {
  method: 'GET',
  path: '/contacts/{name}',
  handler: getContactByName,
};
