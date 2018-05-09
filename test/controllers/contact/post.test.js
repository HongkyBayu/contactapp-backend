import { expect } from 'chai';
import Hapi from 'hapi';
import App from '../../../src/App';
import Contacts from '../../../src/models/contact/Contacts';

const db = require('../../../src/db/database').db;

describe('Contacts Controller', () => {
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

  describe('POST Contacts', () => {
    it('should POST name: "rangga" and email: "rangga@gmail.com" ', async () => {
      const response = await server.inject({
        url: '/contacts',
        method: 'POST',
        payload: {
          name: 'rangga',
          email: 'rangga@gmail.com',
        },
      });
      const postFromDb = await Contacts.findOne();
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
      const postFromDb = await Contacts.findOne();
      expect(postFromDb.name).to.eq('ramzi');
      expect(postFromDb.email).to.eq('ramzi@gmail.com');
      expect(response.statusCode).to.eq(201);
    });
  });

  describe('POST contact Joi Error', () => {
    it('should return error code 400 when email is null', async () => {
      const response = await server.inject({
        url: '/contacts',
        method: 'POST',
        payload: {
          name: 'ramzi',
        },
      });
      const boom = JSON.parse(response.payload);
      expect(boom.statusCode).to.eq(400);
      expect(boom.error).to.eq('Bad Request');
      expect(boom.message).to.eq('Name and/or Email invalid');
    });

    it('should error code 404 when name is less than 3 char', async () => {
      const response = await server.inject({
        url: '/contacts',
        method: 'POST',
        payload: {
          name: 'ra',
          email: 'ramzi@btpn.com',
        },
      });
      const boom = JSON.parse(response.payload);
      expect(boom.statusCode).to.eq(400);
      expect(boom.error).to.eq('Bad Request');
      expect(boom.message).to.eq('Name and/or Email invalid');
    });

    it('should return error code 404 when email have incorrect format', async () => {
      const response = await server.inject({
        url: '/contacts',
        method: 'POST',
        payload: {
          name: 'ramzi',
          email: 'rangga',
        },
      });
      const boom = JSON.parse(response.payload);
      expect(boom.statusCode).to.eq(400);
      expect(boom.error).to.eq('Bad Request');
      expect(boom.message).to.eq('Name and/or Email invalid');
    });
  });
});
