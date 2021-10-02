const fs=require('fs')


// fs.writeFileSync('myFile.txt','hello programar')
// fs.writeFileSync('myFile.txt','how are you ')
// fs.appendFileSync('myFile.txt','hello programar')

// file read:
// const data=fs.readFileSync('myFile.txt')
// console.log(data);
// // for string data:
// console.log(data.toString());

fs.readFile('myFile.txt',(err,res)=>{
    console.log(res.toString())
})
console.log("hello");
