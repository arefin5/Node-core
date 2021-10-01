const EventEmitter = require('events');
class ClassNine extends EventEmitter{
    periodHandle=()=>{
        console.log("hello event")
       setTimeout(() => {
        this.emit('startBaile',{
            period:'bangla',
            teacher:'sagor sir'
        })
       }, 3000);
    }
    
}
module.exports=ClassNine