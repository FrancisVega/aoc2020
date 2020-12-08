const { readInputAsArray } = require("../utils")
const {
  arrayMult,
  getTwoMagicNumbers,
  getThreeMagicNumbers,
} = require("./index")

const input = readInputAsArray("day01")

console.log("# Day 01\n")

const part1Solution = arrayMult(getTwoMagicNumbers(input, 2020))
const part2Solution = arrayMult(getThreeMagicNumbers(input, 2020))

console.log(`Part 1 -> ${part1Solution}`)
console.log(`Part 2 -> ${part2Solution}`)
