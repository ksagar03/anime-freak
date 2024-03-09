"use server";

export const fetchAnimeData = async ({ page }) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=12&order=popularity`
  );
  const data = await res.json();
  console.log(data);
  return data;
};
