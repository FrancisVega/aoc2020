const { readInputAsArray } = require("../utils")
const {
  duplicateMap,
  computeCoords,
  generateNewMap,
  countTrees,
} = require("./index")

// input processing
const input = readInputAsArray("day03", true)

describe("Day 03", () => {
  describe("Part 1", () => {
    test("should return an object with the four elements", () => {
      expect(duplicateMap(["a", "b", "c"], 2)).toStrictEqual(["aa", "bb", "cc"])
    })
    test("should return an array of coords based on array and initial coords", () => {
      expect(computeCoords(["aaaa", "bbbb", "cccc"], 3, 1)).toStrictEqual([
        [0, 0],
        [3, 1],
        [6, 2],
      ])
      expect(computeCoords(["aaaa", "bbbb", "cccc"], 1, 2)).toStrictEqual([
        [0, 0],
        [1, 2],
      ])
    })
    test("should return the example solution", () => {
      expect(countTrees(input, 3, 1)).toBe(7)
    })
  })
})
