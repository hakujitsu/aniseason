// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(request, response) {
  let { season, year, offset = 0 } = request.query;
  season = season.toLowerCase()
  offset = offset * 96
  const res = await fetch(
    `https://api.myanimelist.net/v2/anime/season/${year}/${season}?limit=96&offset=${offset}&sort=anime_num_list_users&fields=synopsis`,
    {
      method: 'GET',
      headers: {
        "X-MAL-CLIENT-ID": process.env.CLIENT_ID,
        'Content-Type': 'application/json'
      },
    });

  const data = await res.json();

  const listOfAnime = data.data.map(a => a.node)

  return response.status(200).json({ data: listOfAnime });
}
