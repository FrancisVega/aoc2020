const { readFileSync } = require("fs")
const {
  arraySum,
  arrayMult,
  duplaList,
  getTwoMagicNumbers,
} = require("./index")

// input processing
const inputFile = `./src/day01/input`
const rawInput = readFileSync(`${inputFile}`, "utf8")
const arrayInput = rawInput.split("\n").filter(x => x !== "")

const inputFile_ex = `./src/day01/input-example`
const rawInput_ex = readFileSync(`${inputFile_ex}`, "utf8")
const arrayInput_ex = rawInput_ex.split("\n").filter(x => x !== "")

// final input
const input = arrayInput
const input_ex = arrayInput_ex

// test
describe("Day 1: Report Repair", () => {
  describe("Generic", () => {
    describe("Sum elements of an array", () => {
      test("should return valid number", () => {
        expect(arraySum([1, 2])).toBe(3)
        expect(arraySum([-1, "2"])).toBe(1)
      })
      test("should return NaN with a non number element", () => {
        expect(arraySum([-1, "foo"])).toBe(NaN)
      })
    })
    describe("Multiply elements of an array", () => {
      test("should return valid number", () => {
        expect(arrayMult([1, 2])).toBe(2)
        expect(arrayMult([-1, "2"])).toBe(-2)
      })
      test("should return NaN with a non number element", () => {
        expect(arrayMult([-1, "foo"])).toBe(NaN)
      })
    })
  })
  describe("Part 1", () => {
    test("should return input file lines^2", () => {
      expect(duplaList(input).length).toBe(arrayInput.length ** 2)
    })
    test("should return two numbers that adds `sum`", () => {
      expect(arraySum(getTwoMagicNumbers(input_ex, 2020))).toBe(2020)
    })
    test("should return example final solution", () => {
      expect(arrayMult(getTwoMagicNumbers(input_ex, 2020))).toBe(514579)
    })
  })
})
