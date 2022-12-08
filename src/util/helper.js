const date = new Date()

function printDate(){
    
    let day = date.getDate()
    console.log(day)
}

function printMonth(){

    let month = date.getMonth()
    console.log(month)
}

function getBatchInfo(){
    console.log(`Californium,W3D4,topic tought today was Node js Module system `)
}

module.exports.date = printDate
module.exports.month = printMonth
module.exports.info= getBatchInfo





