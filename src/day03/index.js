const duplicateMap = (m, mult) => m.map(x => x.repeat(mult))
const { fillArrayOfInt } = require("../utils")

const computeCoords = (arr, x, y) => {
  const rows = arr.length
  return fillArrayOfInt(rows)
    .map((_, idx) => [x * idx, y * idx])
    .filter(el => el[1] <= rows)
}

const generateNewMap = (arr, x, y) => {
  const columns = arr[0].length
  const coords = computeCoords(arr, x, y)
  const totalColumnsNeeded = coords[coords.length - 1][0]
  const totalMapsNeeded = Math.ceil(totalColumnsNeeded / columns)
  return duplicateMap(arr, totalMapsNeeded)
}

const countTrees = (arr, x, y) => {
  const newMap = generateNewMap(arr, x, y)
  return newMap.map((_, idx) => _.split("")[x * idx]).filter(x => x === "#")
    .length
}

module.exports = { duplicateMap, computeCoords, generateNewMap, countTrees }
