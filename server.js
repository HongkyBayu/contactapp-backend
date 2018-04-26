/**
 * Represents the hapi server configuration
 */

import Hapi from 'hapi';
import App from './src/App';

const db = require('./src/db/database').db;

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000,
});

const app = new App(server);
app.run();
