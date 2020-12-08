function formatElement(el) {
  const [ab, c, d] = el.replace(":", "").split(" ")
  const [a, b] = ab.split("-")
  return { a, b, c, d }
}

const checkElement = el => {
  const forEl = formatElement(el)
  const pattern = forEl.c
  const re = new RegExp(pattern, "g")
  const matchResult = forEl.d.match(re) || []
  return matchResult.length >= forEl.a && matchResult.length <= forEl.b
}

const checkElement2 = el => {
  const forEl = formatElement(el)
  const p1 = forEl.d.split("")[Number(forEl.a) - 1]
  const p2 = forEl.d.split("")[Number(forEl.b) - 1]
  return (
    (p1 === forEl.c && p2 !== forEl.c) || (p1 !== forEl.c && p2 === forEl.c)
  )
}

const checkList = list =>
  list.map(el => checkElement(el)).filter(Boolean).length

const checkList2 = list =>
  list.map(el => checkElement2(el)).filter(Boolean).length

module.exports = { formatElement, checkElement, checkList, checkList2 }
