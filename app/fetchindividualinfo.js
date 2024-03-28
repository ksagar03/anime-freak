export const fetchIndividualData = async ({ animeID }) => {
  const kitsuanimedata_res = await fetch(
    `https://kitsu.io/api/edge/anime/${animeID}`
  );
  const animedata = await kitsuanimedata_res.json();

  return animedata.data.attributes;
};
