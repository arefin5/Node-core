const ClassNine=require('./school2')
const classNine=new ClassNine()
classNine.on('startBaile',({period ,teacher})=>{
    console.log(`when 2nd bale is ringing ${teacher} is comming for ${period} class`)

})
classNine.periodHandle()