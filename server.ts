import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as homeController from './server/controllers/home.controller';
import * as adminController from './server/controllers/admin.controller';
import * as loginController from './server/controllers/login.controller';
import * as teacherController from './server/controllers/teacher.controller';
import {log} from "./server/config/logger";
const db = require("./server/config/db");
import { IUser } from "./server/interfaces/user";
// const cors = require('cors');



dotenv.config();


const app = express();

const adminRoutes = new adminController.adminRouter;
const loginRoutes = new loginController.loginRouter;
const teacherRoutes = new teacherController.teacherRouter;

// describing ports
const port = process.env.PORT || 3000;

//middlewares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
// app.use(cors());
app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', homeController.index);
app.use('/api/admin',adminRoutes.router);
app.use('/api/login', loginRoutes.router);
app.use('/api/teacher', teacherRoutes.router);


app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
    app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
  log.info(`Express server listening on port ${port}.\nEnvironment: ${process.env.NODE_ENV}`);
});

module.exports = app;
