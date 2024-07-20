export const fetchIndividualData = async ({ animeID }) => {
  const kitsuanimedata_res = await fetch(
    `https://kitsu.io/api/edge/anime/${animeID}`
  );
  const animedata = await kitsuanimedata_res.json();
  console.log(animedata)

  return animedata.data.attributes;
};
