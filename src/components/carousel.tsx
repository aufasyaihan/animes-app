"use client";

import { AnimeData } from "@/types/animeList";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [animes, setAnimes] = useState<AnimeData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime?limit=5", {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setAnimes(data.data))
      .catch((error) => console.error("Error fetching anime data:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (animes.length || 1));
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [animes]);

  return (
    <div className="overflow-hidden mx-auto">
      <div
        className="flex gap-5 transition-transform duration-500 ease-in-out h-fit "
        style={{ transform: `translateX(-${currentIndex * 20}%)` }}
      >
        {animes.length > 0 &&
          animes.map((anime) => (
            <div key={anime.mal_id} className="">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={150}
                height={100}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
