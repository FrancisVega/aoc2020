const arraySum = x => x.reduce((acc, curr) => Number(acc) + Number(curr))

const arrayMult = x => x.reduce((acc, curr) => Number(acc) * Number(curr))

const duplaList = list =>
  list.flatMap(n1 => list.map(n2 => [n1, n2].map(n => Number(n))))

const triplaList = list => {
  return list.flatMap(n1 =>
    list.flatMap(n2 => list.map(n3 => [n1, n2, n3].map(n => Number(n))))
  )
}

const getTwoMagicNumbers = (list, sum) => {
  return duplaList(list).find(([a, b]) => {
    return a + b === sum
  })
}

const getThreeMagicNumbers = (list, sum) => {
  return triplaList(list).find(([a, b, c]) => {
    return a + b + c === sum
  })
}

module.exports = {
  arraySum,
  arrayMult,
  duplaList,
  triplaList,
  getTwoMagicNumbers,
  getThreeMagicNumbers,
}
