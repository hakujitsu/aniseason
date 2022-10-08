const minYear = 2006
const fourSeasons = ["Winter", "Spring", "Summer", "Fall"]

export const generateSeasons = () => {
  const currYear = new Date().getFullYear();
  const currMonth = new Date().getMonth();
  let seasons = []

  for (let y = minYear; y <= currYear; y++) {
    fourSeasons.forEach((s) => {
      seasons.push(s + " " + y)
    })
  }

  let currSeasonIndex = Math.floor(currMonth / 3)

  if (currSeasonIndex === 0) {
    seasons.pop()
  } else if (currSeasonIndex === 2) {
    seasons.push(fourSeasons[0] + " " + (currYear + 1))
  } else if (currSeasonIndex === 3) {
    seasons.push(fourSeasons[0] + " " + (currYear + 1))
    seasons.push(fourSeasons[1] + " " + (currYear + 1))
  }

  return seasons
}

export const parseSeason = (s) => {
  const temp = s.split(" ")
  const season = temp[0].toLowerCase()
  const year = temp[1]

  return {season, year}
}