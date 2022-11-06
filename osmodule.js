const os = require('os')



//info abo0ut user 
const user = os.userInfo()
// console.log(user)


//method returs system uptime 


// console.log (os.uptime())


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem :os.freemem(),
}

console.log(currentOS)


//