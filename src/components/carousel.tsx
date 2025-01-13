"use client";

import { AnimeData } from "@/types/animeList";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";

export default function Carousel() {
    const [animes, setAnimes] = useState<AnimeData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const previousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? animes.length - 5 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === animes.length - 5 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        setIsLoading(true);
        fetch("https://api.jikan.moe/v4/top/anime?limit=10", {
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => setAnimes(data.data))
            .catch((error) =>
                console.error("Error fetching anime data:", error)
            );
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (animes?.length > 0) {
            const nextAuto = setInterval(() => {
                nextSlide();
            }, 3000);

            return () => clearInterval(nextAuto);
        }
    });

    return (
        <div className="flex flex-col gap-2 w-full mx-auto overflow-hidden">
            <div
                className="flex gap-4 transition ease-in-out duration-500 w-[2000px] h-60"
                style={{
                    transform: `translateX(-${currentIndex * (100 / 15)}%)`,
                }}
            >
                {isLoading && Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-40 h-60 bg-gray-600 animate-pulse"
                    ></div>
                ))}
                {animes?.length > 0 && animes.map((anime) => (
                    <Link
                        href={`/animes/${anime.mal_id}`}
                        key={anime.mal_id}
                        className="w-fit h-full overflow-hidden relative group"
                    >
                        <Image
                            src={anime.images.webp.image_url}
                            alt={anime.title}
                            width={150}
                            height={100}
                            priority
                            className="w-fit h-full object-cover group-hover:scale-110 transition ease-out duration-500 cursor-pointer"
                        />
                        <div className="bg-gradient-to-t from-black w-full h-full absolute bottom-0"></div>
                        <div className="absolute bottom-0 text-wrap w-full px-4 py-2">
                            {anime.title}
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    {isLoading && Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="rounded-full w-2 h-2 bg-gray-600"
                        ></div>
                    ))}
                    {Array.from({ length: animes?.length - 4 }).map((_, i) => (
                        <div
                            onClick={() => setCurrentIndex(i)}
                            key={i}
                            className={`rounded-full w-2 h-2 cursor-pointer ${
                                i === currentIndex ? "bg-blue-700" : "bg-white"
                            }`}
                        ></div>
                    ))}
                </div>
                <div className="text-right text-2xl">
                    <button onClick={previousSlide}>
                        <IoIosArrowDropleftCircle />
                    </button>
                    <button onClick={nextSlide}>
                        <IoIosArrowDroprightCircle />
                    </button>
                </div>
            </div>
        </div>
    );
}
