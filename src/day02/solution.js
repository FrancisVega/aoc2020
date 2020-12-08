const { readInputAsArray } = require("../utils")
const { checkList } = require("./index")

const input = readInputAsArray("day02")

console.log("# Day 02\n")

const part1Solution = checkList(input)

console.log(`Part 1 -> ${part1Solution}`)
