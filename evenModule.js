// const EVENEMITER=require('events')
const EventEmitter = require('events');
const emitter=new EventEmitter()
// register event :

emitter.on('bellRing',x=>{
    console.log("school chutit");
})

//raise an event
emitter.emit('bellRing')