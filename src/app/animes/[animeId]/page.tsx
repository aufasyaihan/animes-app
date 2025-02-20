import Chips from "@/components/UI/chips";
import { AnimeDataType } from "@/types/animeList";
import { EpisodesType } from "@/types/episodes";
import Image from "next/image";

interface ParamsType {
    animeId: string;
}

export default async function AnimePage({ params }: { params: ParamsType }) {
    const resAnime = await fetch(
        `https://api.jikan.moe/v4/anime/${params.animeId}`,
        {
            headers: { "Content-Type": "application/json" },
        }
    );
    if(!resAnime.ok) {
        throw new Error("Failed to fetch data from the server");
    }
    const data = await resAnime.json();
    const animes: AnimeDataType = data?.data;

    const resEpisode = await fetch(
        `https://api.jikan.moe/v4/anime/${params.animeId}/episodes`,
        {
            headers: { "Content-Type": "application/json" },
        }
    );
    if(!resEpisode.ok) {
        throw new Error("Failed to fetch data from the server");
    }
    const dataEpisode = await resEpisode.json();
    const episodes: EpisodesType[] = dataEpisode?.data;

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
                        <div
                            className="flex items-center gap-2 w-full"
                            key={episode.mal_id}
                        >
                            <p className="p-2 bg-gray-700 rounded-sm w-10 text-center">
                                {index + 1}
                            </p>
                            <a
                                className="flex gap-2 bg-gray-600 w-full p-2 rounded-sm hover:bg-gray-700"
                                href={episode.url}
                            >
                                <div className="flex justify justify-between w-full">
                                    <p className="text-ellipsis whitespace-nowrap overflow-hidden w-[1000px]">
                                        {episode.title}
                                    </p>
                                    <span className="px-2">↗</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
