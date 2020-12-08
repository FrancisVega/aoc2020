const { readInputAsArray } = require("../utils")
const { countTrees } = require("./index")

const input = readInputAsArray("day03")

console.log("# Day 03\n")

const part1Solution = countTrees(input, 3, 1)

console.log(`Part 1 -> ${part1Solution}`)
