import mysql_connect from '../libs/mysql_connect';
import UserTypes from './entity/UserTypes';
const Register = (data:UserTypes)=>{
    return {
        data : data,
    }
}

export default {
    Register
}