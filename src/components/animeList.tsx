"use client";
import { AnimeData } from "@/types/animeList";
import Card from "@/UI/card";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AnimeList({ category }: { category: string }) {
    const [animes, setAnimes] = useState<AnimeData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    let url: string;
    if (category === "all") {
        url = "https://api.jikan.moe/v4/top/anime?limit=20";
    } else if (category === "ongoing") {
        url = "https://api.jikan.moe/v4/seasons/now?limit=10";
    }

    useEffect(() => {
        setIsLoading(true);
        fetch(url, {
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => setAnimes(data.data))
            .catch((error) =>
                console.error("Error fetching anime data:", error)
            );
        setIsLoading(false);
    }, []);
    return (
        <div className="flex flex-row flex-wrap justify-between gap-4 w-full mx-auto pb-8">
            {isLoading &&
                Array.from({ length: 10 }).map((_, i) => (
                    <Card key={i}>
                        <div className="h-64 bg-gray-600 w-48 animate-pulse"></div>
                        <h2 className="w-48 font-bold text-wrap p-2 bg-gray-600 animate-pulse"></h2>
                    </Card>
                ))}
            {animes?.length > 0 &&
                animes.map((anime) => (
                    <Card key={anime.mal_id} href={`/animes/${anime.mal_id}`}>
                        <div className="h-64 overflow-hidden">
                            <Image
                                src={anime.images.webp.image_url}
                                alt={anime.title}
                                width={200}
                                height={300}
                                priority
                                className="object-cover w-full group-hover:scale-110 transition-all ease-out duration-500"
                            />
                        </div>
                        <h2 className="w-48 font-bold text-wrap p-2">
                            {anime.title}
                        </h2>
                    </Card>
                ))}
        </div>
    );
}
