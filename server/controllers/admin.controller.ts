import { Request, Response, Router } from 'express';
import { index } from './home.controller';
import {admin} from '../models/admin'
let pkg = require(__dirname + '/../../package.json');
const db = require("../config/db");
const bcrypt = require('bcrypt');
import  Verifytoken  from './verifyToken';


export class adminRouter{
  public router : Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  // methods for admin 
  // GetAll method from admin
  public getAll(req:Request,res:Response):void{
    admin.findAll()  
    // Returning json promise
    .then((data)=>{
      res.status(200).json({data});
    })
    //Returning error Response
    .catch((error)=>{
      res.status(500).json({error})
    })
  }

  // getOne method for admin
  public getOne(req:Request, res:Response):void{
    // requested param will be got from the url
    let id : any = req.params.id;
    console.log(id);
   
    admin.findById(id)
    //If ID not found then initializing catch block
    .then((data:any)=>{
      res.status(200).json({data})
    })
    .catch((error:any)=>{
      res.status(500).json({error})
    })
  }

  // initializing the create request.
  public create(req: Request, res: Response): void {
    // requested param will be got from the url
    let description: any = req.body.description;

    //hashing password
    let bcryptHashNumber = Math.floor((Math.random() * 10) + 5);

    bcrypt.hash(description.password, bcryptHashNumber, (err: any, hash: any) => {
      if (err) {
        console.log(err)
      } else {
        description.password = hash

        //create method for inserting data into the admins table 
        admin.create({ description })
          //If ID not found then initializing catch block
          .then((data: any) => {
            res.status(200).json({ data })
          })
          .catch((error: any) => {
            res.status(500).json({ error })
          })
      };
    })
  }

  // setting up delete request using destroy command
  public delete(req:Request, res:Response):void{
    const id: any = req.params.id;
    admin.destroy({where:{id:id}})
    .then((data:any)=>{
      res.status(200).json({data})
    })
    .catch((error:Error)=>{
      res.status(500).json({error})
    })
  }

  // setting up update method 
public update (req:Request, res:Response):void{
  const id: any = req.params.id;
  const description:any = req.body.description;
  admin.update({description},{where:{id:id}}).then((data)=>{
    res.status(200).json({data});
  })
  .catch((error)=>{
    res.status(500).json({error});
  })
  
}

//setting up routes method
  public routes():void{
    this.router.get('/',Verifytoken, this.getAll);
    this.router.get('/:id',Verifytoken, this.getOne);
    this.router.post('/',Verifytoken,this.create);
    this.router.delete('/:id',Verifytoken,this.delete);
    this.router.post('/update/:id',Verifytoken,this.update)
  }

}

// const adminRoutes = new adminRouter();
// adminRoutes.routes();
// export default adminRoutes.routes;