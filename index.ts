import express, {Express, Response,Request} from 'express';
import cors from 'cors';
import Api from './routes/Api';
import bodyParser from 'body-parser';
const app : Express = express();


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true,
}))

app.use('/api/v1',Api);


app.listen(4000,function(){
    console.log("Berhasil");
})