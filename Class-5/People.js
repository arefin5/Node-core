// (function(exports,module,require,__dirname,__filename){
// let people = ["arefin", "adnan", "diva"];
// var a = 20;
// let test = () => {
//   console.log("hello module test");
// };
// console.log(module);
// module.exports = people;
//   })
let people = ["arefin", "adnan", "diva"];
var a = 20;
let test = () => {
 return ("hello module test");
};
// console.log(module);
// for multiple export :
// module.exports = {
//     people:people,
//     a:a,
//     test:test
// }

// or sort cut way :
module.exports={
    people,
    a,
    test
}