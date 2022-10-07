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

  let currSeasonIndex = Math.floor(currMonth / 4)

  for (let s = 0; s < currSeasonIndex + 1; s++) {
    seasons.push(fourSeasons[s] + " " + (currYear + 1))
  }

  return seasons
}

export const parseSeason = (s) => {
  const temp = s.split(" ")
  const season = temp[0].toLowerCase()
  const year = temp[1]

  return {season, year}
}