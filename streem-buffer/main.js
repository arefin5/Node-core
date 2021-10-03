const http =require('http')
const { method } = require('lodash')
const { chunk } = require('lodash')

const server=http.createServer((req,res)=>{
    if (req.url ==='/') {
        res.write(
            `
            <html lang="en">
            <head>
             <title>Form </title>
         </head>
         <body>
         <form action="/process" method="post">
         <input name="message" />
         </form>
         </body>
            `
        )
        res.end()
    }else if(req.url==='/process' && req.method==="POST"){
         let body=[]
         req.on('data',(chunk)=>{
             body.push(chunk)
         })
         req.on('end',()=>{
             console.log('streem finished')
             let bodyParse=Buffer.concat(body).toString()
             console.log(bodyParse)
         res.write('thank you sbmiting data')
         res.end()
         })

    }
})

server.listen(3000)
console.log("hello server");