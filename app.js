const express =  require('express');
const path = require('path');
// const PORT = 4000;

const app =express();

let quotes = require('./data/quotes');

// app.listen(PORT,function(){

//     console.log("server is istening to the port"+PORT);
// })


app.get('/', function(req,res){

   res.sendFile(path.join(__dirname,'public/index.html'));

})


app.get('/quotes', function(req,res){

   const randomQuotes = quotes[Math.floor(Math.random()* quotes.length) +1];
   res.send(randomQuotes);
   
})

module.exports = app;