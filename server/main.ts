
/* Khasla School web app main file  */
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as homeController from './controllers/home.controller';
import {log} from "./config/logger";
const db = require("./config/db");

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', homeController.index);


app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
    app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
  log.info(`Express server listening on port ${port}.\nEnvironment: ${process.env.NODE_ENV}`);
});


module.exports = app;
