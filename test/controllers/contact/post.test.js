import { expect } from 'chai';
import Hapi from 'hapi';
import App from '../../../src/App';
import Contact from '../../../src/models/contact/Contacts';

const db = require('../../../src/db/database').db;

describe('Contact Controller', () => {
  let server = null;
  beforeEach(() => {
    server = new Hapi.Server();
    new App(server).configure();
  });

  afterEach((done) => {
    Contact.remove({}, () => {
      done();
    });
  });

  describe('POST Contact', () => {
    it('should POST name: "rangga" and email: "rangga@gmail.com" ', async () => {
      const response = await server.inject({
        url: '/contacts',
        method: 'POST',
        payload: {
          name: 'rangga',
          email: 'rangga@gmail.com',
        },
      });
      const postFromDb = await Contact.findOne();
      expect(postFromDb.name).to.eq('rangga');
      expect(postFromDb.email).to.eq('rangga@gmail.com');
      expect(response.statusCode).to.eq(201);
    });

    it('should POST name: "ramzi" and email: "ramzi@gmail.com" ', async () => {
      const response = await server.inject({
        url: '/contacts',
        method: 'POST',
        payload: {
          name: 'ramzi',
          email: 'ramzi@gmail.com',
        },
      });
      const postFromDb = await Contact.findOne();
      expect(postFromDb.name).to.eq('ramzi');
      expect(postFromDb.email).to.eq('ramzi@gmail.com');
      expect(response.statusCode).to.eq(201);
    });
  });
});
