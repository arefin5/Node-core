const EventEmitter = require('events');
// const emitter=new EventEmitter()
class School extends EventEmitter{
    StartPeriod=()=>{
        console.log('hello school');
        setTimeout(() => {
            this.emit('bellRing',{
                period:'first',
                text:'ended'
            })
        }, 2000);
      }
}
module.exports =School