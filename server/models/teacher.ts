/* Setting up model for teachers */
import * as db from '../config/db';
import * as Sequelize from 'sequelize';
// import { date } from 'joi';


// defining teachers model
export const teacher = db.sequilize.define('teachers', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true
    },
    description: {
        type: Sequelize.JSON
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});
