/** setting up databse file for the database connection to khalsa School */

// importing Sequilize 
import * as Sequelize from 'sequelize';
const log = require("./logger").log;


export const sequilize = new Sequelize('postgres://qnsfwisi:Jt9VsRBpStZtyHLz8uqjykqhr1WUE--_@elmer.db.elephantsql.com:5432/qnsfwisi');

//checking if the database is connected 
sequilize.authenticate()
.then(
  ()=>{
    console.log('database connected');
  })
.catch(
  err=>{
    console.error('you are struck with this => ', err)
  }
)

