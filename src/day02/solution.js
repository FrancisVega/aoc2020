const { readInputAsArray } = require("../utils")
const { checkList, checkList2 } = require("./index")

const input = readInputAsArray("day02")

console.log("# Day 02\n")

const part1Solution = checkList(input)
const part2Solution = checkList2(input)

console.log(`Part 1 -> ${part1Solution}`)
console.log(`Part 2 -> ${part2Solution}`)
