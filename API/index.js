const express = require('express');
const route = require('./controller');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Port = parseInt(process.env.PORT) || 4000;
const app = express();
const {errorHandling} = require('./middleware/ErrorHandling');

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', 'http:/localhost:8080');
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Access-Control-Allow-Methods', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
});
app.use(route);
app.use(cors(), cookieParser(), express.json, express.urlencoded({extended: false}));

app.listen(Port, ()=>{
    console.log(`Server Streaming on Port: ${Port}`);
    console.log(`Cessation Of Server: Ctrl + C`);
});
app.use(errorHandling);