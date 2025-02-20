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

    const res = await fetch(url, {
        headers: { "Content-Type": "application/json" },
    });
    const animes: AnimeListType = await res.json();
    const animesData: AnimeDataType[] = animes?.data;

    return animesData?.map((anime) => (
        <Card key={anime.mal_id} href={`/animes/${anime.mal_id}`}>
            <AnimeData {...anime} />
        </Card>
    ));
}

export default function AnimeList({ category }: { category: string }) {
    return (
        <Suspense fallback={<LoadingAnimeList />}>
            <div className="grid grid-cols-5 justify-between gap-4 w-full mx-auto pb-8">
                <Anime category={category} />
            </div>
        </Suspense>
    );
}
