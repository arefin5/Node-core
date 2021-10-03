// const http=require('http')
// const { chunk } = require('lodash')
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//      res.write(
//          `<html lang="en">
//          <head>
//              <title>Form </title>
//          </head>
//          <body>
//          <form action="/process" method="post">
//          <input name="message" />
//          </form>
//          </body>
//         `
//      )
//       res.end()
//     }else if(req.url==='/process' && req.method==='POST'){
//         const body=[] ;
//         req.on('data',(chunk)=>{
//             // console.log(chunk.toString())
//             // console.log('hello')
//             body.push(chunk)
           
//         })
//         req.on('end',()=>{
//             console.log('streem finished');
//             let bodyParse=Buffer.concat(body).toString()
//             console.log(bodyParse);
//             res.write('Thank you for submiting ')
//         res.end(); //end the response
//         })
        
//     }else{
//         res.write('not found')
//         res.end()
//     }
// })
// server.listen(3000)
// console.log('server run success') 
const fs=require('fs')
const ourReadStrem=fs.createReadStream(`${__dirname}/bigdata.txt`,'utf-8') ;
const ourWriteSrem=fs.createWriteStream(`${__dirname}/output4.txt`,'utf-8')

ourReadStrem.on('data',(data)=>{
    console.log(data);
})
ourReadStrem.on('data',(chunk)=>{
    ourWriteSrem.write(chunk)
    // console.log(chunk.toString());
})
ourReadStrem.pipe(ourWriteSrem)
console.log('hello');