// const EVENEMITER=require('events')
const EventEmitter = require('events');
const emitter=new EventEmitter()
// register event :

// emitter.on('bellRing',(period)=>{
//     console.log(`we need to run !  ${period}`);
// })

//raise an event
// setTimeout(() => {
//     emitter.emit('bellRing','secend period is start')
// }, 2000);

emitter.on('bellRing',({period,text})=>{
    console.log(`we need to run ! becouse ${period} ${text}`);
})
// multiple paramitar:
setTimeout(() => {
    emitter.emit('bellRing',{
        period:'first',
        text:'ended'
    })
}, 2000);