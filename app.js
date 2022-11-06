const w = require('lodash')

const items = [1 , [2,[3,[4]]]]
const a = w.flattenDeep(items);
console.log(a)