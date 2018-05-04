import { expect } from 'chai';
import Contacts from '../../../src/models/contact/Contacts';

describe('#Validate', () => {
  it('should be error if name is empty', (done) => {
    const mockEmail = 'ranggaaabayu@gmail.com';
    const contacts = new Contacts({ email: mockEmail });

    contacts.validate((err) => {
      expect(err.errors.name).to.exist;
      done();
    });
  });

  it('should be error if email is empty', (done) => {
    const mockName = 'rangga';
    const contacts = new Contacts({ name: mockName });

    contacts.validate((err) => {
      expect(err.errors.email).to.exist;
      done();
    });
  });
});
