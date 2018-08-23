import { Request, Response, Router, NextFunction } from 'express';
const passport = require('passport');
const passportLocal = require("passport-local");
const LocalStrategy = passportLocal.Strategy;
const jwt = require('jsonwebtoken');
const db = require('../config/db');
import { admin } from '../models/admin'
import { teacher } from '../models/teacher';
const bcrypt = require('bcrypt');



export class loginRouter {
    public router: Router;

    constructor () {
        this.router = Router();
        this.routes();
    }

    public async allAdmin(req: Request, res: Response, next: NextFunction) {
        //request from params

        let email = req.body.email;
        let password = req.body.password;

        let user: any = await admin.findOne({
            where: {
                description: {
                    email: email
                }
            }
        })
        // console.log(JSON.stringify(user));

        // checking if user found 
        if (!user) {
            return res.status(404).send('No user found.');
        }

        //password is valid
        let passwordIsValid = await bcrypt.compareSync(password, user.description.password);

        //checking if invalid password
        if (!passwordIsValid) {
            return res.status(401).send({
                auth: false,
                token: null
            });
        }

        //generating token 
        var token = await jwt.sign({ user: user }, 'secret', {
            expiresIn: 86400 // expires in 24 hours
          }, (err: any, token: any) => {
            res.json({
                token: token,
                msg: ' user accepted '
            });
        });
    }


    public async allTeachers(req: Request, res: Response, next: NextFunction) {
        //request from params

        let email = req.body.email;
        let password = req.body.password;

        let teachers: any = await teacher.findOne({
            where: {
                description: {
                    email: email
                }
            }
        })
        // console.log(JSON.stringify(user));

        // checking if teacher found 
        if (!teachers) {
            return res.status(404).send('Teacher not found.');
        }

        //password is valid
        let passwordIsValid = await bcrypt.compareSync(password, teachers.description.password);

        //checking if invalid password
        if (!passwordIsValid) {
            return res.status(401).send({
                auth: false,
                token: null
            });
        }

        //generating token 
        var token = await jwt.sign({ teachers: teachers }, 'secret', (err: any, token: any) => {
            res.json({
                token: token,
                msg: ' teacher accepted '
            });
        });
    }


    public routes(): void {
        this.router.post('/admin',this.allAdmin);
        this.router.post('/teacher', this.allTeachers);
    }

}
