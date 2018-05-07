/**
 * Represents the starting point configuration of the server
 */

import contactRoutes from '../src/controllers/contact'

export default class App {
  constructor(server) {
    this._server = server;
  }

  configure() {
    this.loadControllers();
  }

  loadControllers() {
    this._server.route(contactRoutes);
  }

  async run() {
    await this.configure();
    this._server.start();
  }
}
