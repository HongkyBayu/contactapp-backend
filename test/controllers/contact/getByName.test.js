import { expect } from 'chai';
import Hapi from 'hapi';
import App from '../../../src/App';
import Contacts from '../../../src/models/contact/Contacts';

const db = require('../../../src/db/database').db;

describe('Contact Controller', () => {
  let server = null;
  beforeEach(() => {
    server = Hapi.Server();
    new App(server).configure();
  });

  afterEach((done) => {
    Contacts.remove({}, () => {
      done();
    });
  });

  describe('GET by name route', () => {
    it('should return rangga based on request params "rang"', async () => {
      const contact = new Contacts({
        name: 'rangga',
        email: 'rangga@gmail.com',
      });

      const otherContact = new Contacts({
        name: 'ramzi',
        email: 'ramzi@btpn.com',
      });

      await contact.save();
      await otherContact.save();

      const response = await server.inject({
        url: '/contacts/rang',
        method: 'GET',
      });

      const contactFromResponse = JSON.parse(response.payload);
      expect(contactFromResponse[0].name).to.eq('rangga');
      expect(contactFromResponse[0].email).to.eq('rangga@gmail.com');
    });

    it('should return ramzi based on request params "ram"', async () => {
      const contact = new Contacts({
        name: 'rangga',
        email: 'rangga@gmail.com',
      });

      const otherContact = new Contacts({
        name: 'ramzi',
        email: 'ramzi@btpn.com',
      });

      await contact.save();
      await otherContact.save();

      const response = await server.inject({
        url: '/contacts/ram',
        method: 'GET',
      });

      const contactFromResponse = JSON.parse(response.payload);
      expect(contactFromResponse[0].name).to.eq('ramzi');
      expect(contactFromResponse[0].email).to.eq('ramzi@btpn.com');
    });
  });

  describe('GET by name Boom error', () => {
    it('should return code 404 and error message "not found" when there are no contact based on request params', async () => {
      const contact = new Contacts({
        name: 'rangga',
        email: 'rangga@gmail.com',
      });

      await contact.save();

      const response = await server.inject({
        url: '/contacts/ram',
        method: 'GET',
      });

      const boom = JSON.parse(response.payload);
      expect(boom.statusCode).to.eq(404);
      expect(boom.error).to.eq('Not Found');
    });
  });
});
