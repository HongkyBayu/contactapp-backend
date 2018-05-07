import { expect } from 'chai';
import Hapi from 'hapi';
import App from '../../../src/App';
import Contacts from '../../../src/models/contact/Contacts';

const db = require('../../../src/db/database').db;

describe('Contact Controller', () => {
  let server = null;
  beforeEach(() => {
    server = new Hapi.Server();
    new App(server).configure();
  });

  afterEach((done) => {
    Contacts.remove({}, () => {
      done();
    });
  });

  describe('GET Contact', () => {
    it('should get the contact with first data name field rangga inside the mongo db collection', async () => {
      const contact = new Contacts({
        name: 'Rangga',
        email: 'ranggaaabayu@gmail.com',
      });

      const otherContact = new Contacts({
        name: 'Ramzi',
        email: 'ramzi@btpn.com',
      });

      await contact.save();
      await otherContact.save();

      const response = await server.inject({
        url: '/contacts',
        method: 'GET',
      });

      const postsFromResponse = JSON.parse(response.payload);
      expect(postsFromResponse[0].name).to.eq('Rangga');
      expect(postsFromResponse[1].name).to.eq('Ramzi');
      expect(postsFromResponse[0].email).to.eq('ranggaaabayu@gmail.com');
      expect(postsFromResponse[1].email).to.eq('ramzi@btpn.com');
      expect(response.statusCode).to.eq(200);
    });

    it('should get the contact with first data name field Iqbal inside the mongo db collection', async () => {
      const contact = new Contacts({
        name: 'Iqbal',
        email: 'Iqbal@gmail.com',
      });

      const otherContact = new Contacts({
        name: 'Josep',
        email: 'josep@btpn.com',
      });

      await contact.save();
      await otherContact.save();

      const response = await server.inject({
        url: '/contacts',
        method: 'GET',
      });

      const postsFromResponse = JSON.parse(response.payload);
      expect(postsFromResponse[0].name).to.eq('Iqbal');
      expect(postsFromResponse[1].name).to.eq('Josep');
      expect(postsFromResponse[0].email).to.eq('Iqbal@gmail.com');
      expect(postsFromResponse[1].email).to.eq('josep@btpn.com');
      expect(response.statusCode).to.eq(200);
    });
  });
});
