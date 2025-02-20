import { AnimeDataType, AnimeListType } from "@/types/animeList";
import Card from "./UI/card";
import AnimeData from "./animeData";
import { Suspense } from "react";
import LoadingAnimeList from "./Loading/loadingAnimeList";

async function Anime({ category }: { category: string }) {
    let url: string = "https://api.jikan.moe/v4/top/anime?limit=20";
    if (category === "ongoing") {
        url = "https://api.jikan.moe/v4/seasons/now?limit=10";
    }

    try {
        const res = await fetch(url, {
            headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data from the server");
        }
        const animes: AnimeListType = await res.json();
        const animesData: AnimeDataType[] = animes?.data;

        return (
            <div className="grid grid-cols-5 justify-between gap-4 w-full mx-auto pb-8">
                {animesData.map((anime) => (
                    <Card key={anime.mal_id} href={`/animes/${anime.mal_id}`}>
                        <AnimeData {...anime} />
                    </Card>
                ))}
            </div>
        );
    } catch (error) {
        return (
            <div className="my-2 border-l-4 border-red-400 bg-red-200 text-white p-4 rounded-r-md w-full">
                <p className="text-red-500">{(error as Error).message}</p>
            </div>
        );
    }
}

export default function AnimeList({ category }: { category: string }) {
    return (
        <Suspense fallback={<LoadingAnimeList />}>
            <Anime category={category} />
        </Suspense>
    );
}
