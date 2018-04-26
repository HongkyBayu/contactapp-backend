/**
 * Represents the routing for contact controller
 */

export default class ContactController {
  constructor(server) {
    server.route({
      method: 'GET',
      path: '/',
      handler: this.getContacts,
    });
  }

  async getContacts(request, reply) {
    reply('Connection Passed');
  }
}
