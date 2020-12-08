const arraySum = x => x.reduce((acc, curr) => Number(acc) + Number(curr))
const arrayMult = x => x.reduce((acc, curr) => Number(acc) * Number(curr))

const duplaList = list =>
  list.flatMap(n1 => list.map(n2 => [Number(n1), Number(n2)]))

const getTwoMagicNumbers = (list, sum) => {
  return duplaList(list).find(([a, b]) => {
    return a + b === sum
  })
}

module.exports = { arraySum, arrayMult, duplaList, getTwoMagicNumbers }
