import React from "react";
// import { data } from "./Anime_data";
import AnimeCard from "./components/AnimeCard";
import LoadMore from "./components/LoadMore";
import Header from "./components/Header";
import { fetchAnimeData } from "./fetchaction";
const Home = async () => {
  const data = await fetchAnimeData({ page: 0 });
  return (
    <>
      <Header />
      <main className="sm-p-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl md:text-center mt-1 text-white font-bold">Explore Anime</h2>
        <section className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10">
          {data}
        </section>
        <LoadMore />
      </main>
    </>
  );
};

export default Home;
