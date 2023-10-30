import mysql2, {Connection} from 'mysql2';

const connect : Connection = mysql2.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "db_rest_api",
});

connect.connect();

export default connect;
