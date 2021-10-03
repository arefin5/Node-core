const http =require('http')
const fs=require('fs')
// red strem write:
const server=http.createServer((req,res)=>{
    const myRedStrem=fs.createReadStream(`${__dirname}/bigdata.txt` ,'utf-8')
    myRedStrem.pipe(res)
    // res.end()
})

server.listen(3001)
console.log("hello server");