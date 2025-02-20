import AnimeList from "@/components/animeList";
import Carousel from "@/components/carousel";
import LoadingCarousel from "@/components/Loading/loadingCarousel";
import { AnimeDataType } from "@/types/animeList";
import Link from "next/link";
import { Suspense } from "react";

async function MainCarousel() {
    const res = await fetch("https://api.jikan.moe/v4/top/anime?limit=15", {
        headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    const animes: AnimeDataType[] = res?.data;

    return <Carousel animes={animes} />;
}

export default function Home() {
    return (
        <>
            <section className="flex flex-col mx-auto w-3/4 h-full mt-4 items-center sm:items-start">
                <div className="flex flex-col gap-4 w-full mt-4 mx-auto items-center sm:items-start">
                    <h1 className="text-xl font-bold w-full mx-auto">
                        Popular Anime
                    </h1>
                    <Suspense fallback={<LoadingCarousel />}>
                        <MainCarousel />
                    </Suspense>
                </div>
                <div className="flex flex-col gap-4 w-full mt-4 mx-auto items-center sm:items-start">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-xl font-bold">Ongoing Anime</h1>
                        <Link
                            href={`/animes`}
                            className="bg-blue-900 px-4 py-2 w-fit rounded-md hover:bg-blue-700"
                        >
                            Lihat Semua Anime
                        </Link>
                    </div>
                    <AnimeList category="ongoing" />
                </div>
            </section>
        </>
    );
}
