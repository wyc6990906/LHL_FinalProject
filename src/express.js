//Setup prerequisites
const express = require("express");
const app = express();
const PORT = 3000; // default port 8080
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');


//Hashing and helper-functions
const {hasher, comparer} = require('./crypt');

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieSession({ //Encryption for user cookies
  name : 'userID',
  keys: ['black', 'white', 'red']
}));

app.post("/login", (req,res) => {
  res.redirect("/")
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


