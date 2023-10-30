import Router,{Response,Request} from 'express';
import {v4 as uuidv4} from 'uuid';
import bcrypt from 'bcrypt'
import multer, { Multer } from 'multer';
import models from '../models';
import UserTypes from '../models/entity/UserTypes';
const form : Multer = multer({
    dest :"/uploads"
});

const Api = Router();
Api.post('/register',form.array("avatar"),function(req:Request, res:Response){
    const user: UserTypes = req.body;
    res.json(models.UserModel.Register(user))
})
export default Api;