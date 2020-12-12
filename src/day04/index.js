const is_byr = x => Number(x) >= 1920 && Number(x) <= 2002
const is_iyr = x => Number(x) >= 2010 && Number(x) <= 2020
const is_eyr = x => Number(x) >= 2020 && Number(x) <= 2030
const is_hgt = x => {
  const cm = x.split("cm")
  const inc = x.split("in")

  if (cm.length === 2) {
    return Number(cm[0]) >= 150 && Number(cm[0]) <= 193
  }
  if (inc.length === 2) {
    return Number(cm[0]) >= 59 && Number(cm[0]) <= 76
  }
  return false
}
const is_hcl = x => {
  const hash = x.split("#")
  if (hash.length === 2) {
    if (hash[1].length === 6) {
      const z = hash[1].match(/[\d|abcdef]{6}/g)
      return z ? true : false
    } else {
      return false
    }
  }
  return false
}

const ic_ecl = x => {
  const colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
  return colors.incluides(x)
}

const is_pid = x => {
  if (x.split("").length === 9) {
    return Number(x) ? true : false
  }
  return false
}

const part1 = inputFile => {
  return inputFile
    .split("\n\n")
    .map(x => x.replace(/\n/g, " ").trim())
    .filter(x => x !== "")
    .map(x => x.split(" ").map(x => x.split(":")[0]))
    .filter(x => x.length === 8 || (x.length === 7 && !x.includes("cid")))
    .length
}

module.exports = { part1 }
