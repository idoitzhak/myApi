//names

const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

app.listen(5000);