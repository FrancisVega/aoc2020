const { readInputAsArray } = require("../utils")
const { formatElement, checkElement, checkList } = require("./index")

// input processing
const input = readInputAsArray("day02", true)

describe("Day x: ...", () => {
  describe("Part 1", () => {
    test("should return an object with the four elements", () => {
      expect(formatElement("1-3 a: abcde")).toStrictEqual({
        a: "1",
        b: "3",
        c: "a",
        d: "abcde",
      })
    })
    test("should check the elements with rules", () => {
      expect(checkElement("1-3 a: abcde")).toBe(true)
    })
    test("should return the example solution", () => {
      expect(checkList(input)).toBe(2)
    })
  })
  describe("Part 2", () => {
    test("should...", () => {})
  })
})
