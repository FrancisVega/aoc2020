const { readFileSync } = require("fs")

const readInput = (day, ex) => {
  const inputFile = `./src/${day}/input${ex ? "-example" : ""}`
  const rawInput = readFileSync(inputFile, "utf8")
  return rawInput
}

const readInputAsArray = (day, ex) => {
  return readInput(day, ex)
    .split("\n")
    .filter(line => line !== "")
}

const fillArrayOfInt = count =>
  Array(count)
    .fill(0)
    .map((_, idx) => idx)

module.exports = { readInput, readInputAsArray, fillArrayOfInt }
