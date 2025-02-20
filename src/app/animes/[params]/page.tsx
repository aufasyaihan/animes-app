"use client";

import Chips from "@/components/UI/chips";
import { AnimeDataType } from "@/types/animeList";
import { EpisodesType } from "@/types/episodes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AnimePage({
    params,
}: {
    params: Promise<{ params: string }>;
}) {
    const [animes, setAnimes] = useState<AnimeDataType>();
    const [animeId, setAnimeId] = useState<string | null>(null);
    const [episodes, setEpisodes] = useState<EpisodesType[]>();

    useEffect(() => {
        params
            .then((resolvedParams) => {
                setAnimeId(resolvedParams.params);
            })
            .catch((error) => console.error("Error resolving params:", error));
    }, [params]);

    useEffect(() => {
        if (animeId) {
            fetch(`https://api.jikan.moe/v4/anime/${animeId}`, {
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => setAnimes(data.data))
                .catch((error) =>
                    console.error("Error fetching anime data:", error)
                );
        }
    }, [animeId]);

    useEffect(() => {
        if (animeId) {
            fetch(`https://api.jikan.moe/v4/anime/${animeId}/episodes`, {
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => setEpisodes(data.data))
                .catch((error) =>
                    console.error("Error fetching anime data:", error)
                );
        }
    }, [animeId]);

    return (
        <article className="flex flex-col gap-2 mx-auto w-3/4 h-full my-4 items-center sm:items-start">
            <header className="flex gap-4">
                {animes && (
                    <Image
                        src={animes?.images.webp.image_url}
                        alt={animes?.title}
                        width={200}
                        height={300}
                        priority
                        className="object-cover"
                    />
                )}
                <div className="flex flex-col gap-2 flex-1">
                    <h1 className="text-3xl font-bold ">{`${animes?.title} (${animes?.type})`}</h1>
                    <div className="flex gap-2">
                        <Chips title={animes?.status} />
                        <Chips title={`⭐ ${animes?.score}`} />
                        <Chips title={animes?.rating} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>Genre</h3>
                        <div className="flex gap-2">
                            {animes?.genres.map((genre) => (
                                <Chips key={genre.mal_id} title={genre.name} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>Studios</h3>
                        <div className="flex gap-2">
                            {animes?.studios.map((studio) => (
                                <Chips
                                    key={studio.mal_id}
                                    title={studio.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex flex-col gap-2">
                <h3 className="text-lg">Synopsis</h3>
                <p className="w-full text-justify text-sm text-gray-300">
                    {animes?.synopsis}
                </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <h3 className="text-lg">Episodes</h3>
                <div className="flex flex-col items-center gap-2 ">
                    {episodes?.map((episode, index) => (
                        <div className="flex items-center gap-2 w-full" key={episode.mal_id}>
                            <p className="p-2 bg-gray-700 rounded-sm w-10 text-center">{index + 1}</p>
                            <a
                                className="flex gap-2 bg-gray-600 w-full p-2 rounded-sm hover:bg-gray-700"
                                href={episode.url}
                            >
                                <div className="flex justify justify-between w-full">
                                    {episode.title}
                                    <span>↗</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
