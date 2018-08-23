import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as homeController from './server/controllers/home.controller';
import {log} from "./server/config/logger";
const db = require("./server/config/db");
import { IUser } from "./server/interfaces/user";
import  {StudentRouter} from './server/router/studentRouter';
import { ParentsRouter } from './server/router/parentRouter';
import { errorHandeler } from './server/handler/errorHandler';
import * as adminController from './server/controllers/admin.controller';
import * as loginController from './server/controllers/login.controller';
import * as teacherController from './server/controllers/teacher.controller';
const result = require('./server/convert') ;




dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

let studRouter = new StudentRouter();
let parentRouter = new ParentsRouter();
const adminRoutes = new adminController.adminRouter;
const loginRoutes = new loginController.loginRouter;
const teacherRoutes = new teacherController.teacherRouter;

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', homeController.index);
app.use('/api/v1/students', studRouter.router);
app.use('/api/v1/parents', parentRouter.router);
app.use(errorHandeler);
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
