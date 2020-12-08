const { readFileSync } = require("fs")
const { arrayMult, getTwoMagicNumbers } = require("./index")

const inputFile = `./src/day01/input`
const rawInput = readFileSync(`${inputFile}`, "utf8")
const arrayInput = rawInput.split("\n").filter(x => x !== "")

// Part 1
console.log(arrayMult(getTwoMagicNumbers(arrayInput, 2020)))

// Part 2
//console.log(arrayMult(getTwoMagicNumbers(arrayInput, 2020)))
