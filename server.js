/**
 * Represents the hapi server configuration
 */

import Hapi from 'hapi';
import App from './src/App';

const server = new Hapi.Server();

const db = require('./src/db/database').db;

server.connection({
  host: 'localhost',
  port: 3000,
});

const app = new App(server);
app.run();
