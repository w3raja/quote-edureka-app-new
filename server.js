const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);


server.listen(PORT,function(){

    console.log("Server is listening to the new port number" +PORT);
})