const path = require('path')

// console.log(path.sep)
const filepath = path.join('/test','subfolder','hello.txt')

// console.log(filepath)



const base = path.basename(filepath) 
// console.log(base)



const absolute = path.resolve(__dirname,'test','subfolder','hello.txt')

console.log(absolute)