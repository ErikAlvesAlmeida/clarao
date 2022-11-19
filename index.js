const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", function(req, res){
    res.render("index");
    });

app.listen("9999", function(){
    console.log("Sexo");
});