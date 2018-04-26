/**
 * Represents the start point configuration of the server
 */

import ContactController from '../src/controllers/contact/ContactController';

export default class App {
  constructor(server) {
    this._server = server;
  }

  async configure() {
    this.loadControllers();
  }

  loadControllers() {
    new ContactController(this._server);
  }

  async run() {
    await this.configure();
    this._server.start();
  }
}
