//שמות המשתנים

const express = require('express');
const bodyparser = require('body-parser');
const app = express();

//קריאה 
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

const actionsRoute = require('./actions');
app.use('/api',actionsRoute);

//השרת מקשיב
const port = 5000;
app.listen(port,function(){
    console.log(`Server is working via port ${port}`);
});
