const { readInputAsArray } = require("../utils")
const {
  arraySum,
  arrayMult,
  duplaList,
  getTwoMagicNumbers,
} = require("./index")

// input processing
const arrayInput = readInputAsArray("day01")
const arrayInput_ex = readInputAsArray("day01", true)

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
