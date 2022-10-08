// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(request, response) {
  let { season, year } = request.query;
  season = season.toLowerCase()

  let listOfAnime = []
  let url = `https://api.myanimelist.net/v2/anime/season/${year}/${season}?limit=100&offset=0` +
    `&sort=anime_num_list_users&fields=synopsis,start_season`

  while (url.length > 0) {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        "X-MAL-CLIENT-ID": process.env.CLIENT_ID,
        'Content-Type': 'application/json'
      },
    });

    const data = await res.json();
    listOfAnime = listOfAnime.concat(data.data
      .map(a => a.node).filter(a => {
        return a.start_season.year == year && a.start_season.season === season
      }))

    if (data.paging.next) {
      url = data.paging.next
    } else {
      url = ""
    }
  }

  return response.status(200).json({ data: listOfAnime });
}
