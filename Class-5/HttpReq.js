const http=require('http')
// const server=http.createServer();
// server.on('connection',()=>{
//     console.log('server is run')
    
// })
//create a server object:
const server= http.createServer(function (req, res) {
    if(req.url==='/'){
        res.write('Hello World!'); //write a response to the client
        res.write('what are you doing now')
        res.end(); //end the response
    }else if(req.url==='/about'){
        res.write('what are you doing now')
        res.end(); //end the response
    }else{
        res.write('not found')
        res.end()
    }
  
  })
  server.listen(3000) 
console.log('server run success') 