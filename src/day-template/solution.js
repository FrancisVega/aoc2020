const { readInputAsArray } = require("../utils")
const { foo1, foo2 } = require("./index")

const input = readInputAsArray("day0n")

console.log("# Day 0n\n")

const part1Solution = foo1(input)
const part2Solution = foo2(input)

console.log(`Part 1 -> ${part1Solution}`)
console.log(`Part 2 -> ${part2Solution}`)
