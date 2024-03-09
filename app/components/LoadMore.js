"use client";

import loading from "@/public/bars-scale.svg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { fetchAnimeData } from "../fetchaction";
import AnimeCard from "./AnimeCard";

let page = 2;
const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (inView) {
      fetchAnimeData({ page: page }).then((res) => {
        setData([...data, ...res]);
      });
      page++;
    }
  }, [inView]);
  return (
    <>
      <section className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full" ref={ref}>
        <Image
          src={loading}
          alt="loading"
          width={58}
          height={58}
          className="object-contain"
        />
      </section>
    </>
  );
};

export default LoadMore;
