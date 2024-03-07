import React from "react";
import { data } from "./Anime_data";
import AnimeCard from "./components/AnimeCard";
import LoadMore from "./components/LoadMore";
const Home = () => {
  return (
    <main className="sm-p-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10">
        {data.map((item, index) => (
          <AnimeCard
            key={item.id}
            index={index}
            animeImage={item.image.original}
            animeName={item.name}
            animeKind={item.kind}
            animeAired={item.episodes_aired}
            animeEpisodes={item.episodes}
            animeScore={item.score}
          />
        ))}
      </section>
      <LoadMore />
    </main>
  );
};

export default Home;
