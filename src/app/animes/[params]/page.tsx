"use client";

import { AnimeData } from "@/types/animeList";
import { useEffect, useState } from "react";

export default function AnimePage({
    params,
}: {
    params: Promise<{ params: string }>;
}) {
    const [animes, setAnimes] = useState<AnimeData>();
    const [animeId, setAnimeId] = useState<string | null>(null);

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

    return <h1>{animes?.title}</h1>;
}
