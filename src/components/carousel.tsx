"use client";

import { AnimeData } from "@/types/animeList";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel() {
    const [animes, setAnimes] = useState<AnimeData[]>([]);
    // const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/top/anime?limit=10", {
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => setAnimes(data.data))
            .catch((error) =>
                console.error("Error fetching anime data:", error)
            );
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % animes.length);
    //     }, 5000); // 5 seconds

    //     return () => clearInterval(interval);
    // }, [animes]);

    return (
        <div className="overflow-hidden w-full px-40">
            {/* <div
        className="flex gap-5 transition-transform duration-500 ease-in-out h-fit "
        style={{ transform: `translateX(-${currentIndex * 20}%)` }}
      >
        {animes.length > 0 &&
          animes.map((anime) => (
            <div key={anime.mal_id} className="overflow-hidden">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={150}
                height={100}
                priority
              />
              <div className="h-full w-[150px] bg-gradient-to-t from-black absolute bottom-0"></div>
              <h2 className="absolute bottom-0 w-[150px] text-wrap px-2 py-4">{anime.title}</h2>
            </div>
          ))}
      </div> */}
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={5}
                slidesPerView={7}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                <div className="mx-40">
                    {animes.length > 0 &&
                        animes.map((anime) => (
                            <SwiperSlide key={anime.mal_id}>
                                <div className="h-full w-fit">
                                    <Image
                                        src={anime.images.webp.image_url}
                                        alt={anime.title}
                                        width={150}
                                        height={100}
                                        priority
                                        className="h-[250px] w-auto"
                                    />
                                    <div className="w-full h-full bg-gradient-to-t from-black absolute bottom-0"></div>
                                </div>
                                <h2 className="absolute bottom-0 w-[150px] text-wrap px-2 py-4">
                                    {anime.title}
                                </h2>
                            </SwiperSlide>
                        ))}
                </div>
            </Swiper>
        </div>
    );
}
