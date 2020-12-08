const { readInputAsArray } = require("../utils")
const {
  arraySum,
  arrayMult,
  triplaList,
  duplaList,
  getTwoMagicNumbers,
  getThreeMagicNumbers,
} = require("./index")

// input processing
const input = readInputAsArray("day01", true)

// test
describe("Day 1: Report Repair", () => {
  describe("Generic", () => {
    describe("triplaList", () => {
      test("should return an array", () => {
        expect(triplaList(input)).toBeInstanceOf(Array)
      })
    })
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
      expect(duplaList(input).length).toBe(input.length ** 2)
    })
    test("should return two numbers that add the `sum`", () => {
      expect(arraySum(getTwoMagicNumbers(input, 2020))).toBe(2020)
    })
    test("should return example final solution", () => {
      expect(arrayMult(getTwoMagicNumbers(input, 2020))).toBe(514579)
    })
  })

  describe("Part 2", () => {
    test("should return input file lines^3", () => {
      expect(triplaList(input).length).toBe(input.length ** 3)
    })
    test("should return two numbers that add the `sum`", () => {
      expect(arraySum(getThreeMagicNumbers(input, 2020))).toBe(2020)
    })
    test("should return example final solution", () => {
      expect(arrayMult(getThreeMagicNumbers(input, 2020))).toBe(241861950)
    })
  })
})
