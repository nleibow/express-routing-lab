//Did you use npm install to
//add all these packages
//to our project?---done
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// How do we 'require' the candyRouter file?---done
var candyRouter = require('./candyRouter');

app.use(bodyParser.json());
app.use('/candy',candyRouter);

//How do we redirect the /candies path---done
//through our candyRouter?---done
//Hint: you need app.use---done

app.listen(3000);