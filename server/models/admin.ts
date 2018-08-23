/* Setting up model for admin*/
import * as db from '../config/db';
import * as Sequelize from 'sequelize';
// import { date } from 'joi';


// defining admin model
export const admin = db.sequilize.define('admins',{
   id:{
    primaryKey: true,
    type:Sequelize.INTEGER,
    unique: true,
    autoIncrement: true

   },
    description:{
        type: Sequelize.JSON
    },
    createdAt:{
        type: Sequelize.DATE
    },
    updatedAt:{
        type: Sequelize.DATE
    }
});
