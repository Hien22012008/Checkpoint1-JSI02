//Bài 9
const m = [1, 2, 3, 4, 5, 6, 'hh', '9', 80, 100]
let m1 = m.filter(element => ![1, 2, 3, 4, 5, 6, 80, 100].includes(element))

let mSquared = m1.map(element => Math.pow(element,2))
console.log("🚀 ~ file: index.js:4 ~ m1:", m1)
console.log("🚀 ~ file: index.js:7 ~ mSquared:", mSquared)

//Bài 10
let sayings = 'High knowledge, high return'

const Sayings = sayings.split(" ");

const Saying = Sayings.filter(element => element !== " ")

const Saying1 = Saying.map(element => element.toLowerCase())

console.log("🚀 ~ file: index.js:15 ~ Saying1:", Saying1)