const School=require('./school') 
const school=new School();

// emitter.on('bellRing',(period)=>{
//     console.log(`we need to run !  ${period}`);
// })

//raise an event
// setTimeout(() => {
//     emitter.emit('bellRing','secend period is start')
// }, 2000);

school.on('bellRing',({period,text})=>{
    console.log(`we need to run ! becouse ${period} ${text}`);
})
// multiple paramitar:
school.StartPeriod()