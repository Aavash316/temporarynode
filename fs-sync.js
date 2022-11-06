const {readFileSync , writeFileSync} =require('fs')

const first = readFileSync('./test/first.txt','utf-8')
const second = readFileSync('./test/second.txt','utf-8')

console.log(first)

console.log(second)




writeFileSync('./test/third.txt','first and second ko shit : ${first},${second}', {flag : 'a'})



