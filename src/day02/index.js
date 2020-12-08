function formatElement(el) {
  const [ab, c, d] = el.replace(":", "").split(" ")
  const [a, b] = ab.split("-")
  return { a, b, c, d }
}

const checkElement = el => {
  const formatedElement = formatElement(el)
  const pattern = formatedElement.c
  const re = new RegExp(pattern, "g")
  const matchResult = formatedElement.d.match(re) || []
  return (
    matchResult.length >= formatedElement.a &&
    matchResult.length <= formatedElement.b
  )
}

const checkList = list =>
  list.map(el => checkElement(el)).filter(Boolean).length

module.exports = { formatElement, checkElement, checkList }
