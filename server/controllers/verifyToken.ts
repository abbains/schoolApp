let jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
// let config = require('../config'); // get our config file
import { Request, Response, Router, NextFunction } from 'express';

// export class Verifytoken {

//     constructor() { }

    export default function(req: Request, res: Response, next: NextFunction) {

        // check header or url parameters or post parameters for token
        let token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (!token)
            return res.status(403).send({ auth: false, message: 'No token provided.' });

        // verifies secret and checks exp
        jwt.verify(token, 'secret',  (err: any, decoded: any) =>{
            if (err)
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

            // if everything is good, save to request for use in other route
            req = decoded;
            next();
        });

    }


// }
