import AnimeList from "@/components/animeList";
import Carousel from "@/components/carousel";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <main className="flex flex-col w-full h-full mt-4 items-center sm:items-start">
                <section className="flex flex-col gap-4 w-3/4 mt-4 mx-auto items-center sm:items-start">
                    <h1 className="text-xl font-bold w-full mx-auto">
                        Popular Anime
                    </h1>
                    <Carousel />
                </section>
                <section className="flex flex-col gap-4 w-3/4 mt-4 mx-auto items-center sm:items-start">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-xl font-bold">Ongoing Anime</h1>
                        <Link
                            href={`/animes`}
                            className="bg-blue-900 px-4 py-2 w-fit rounded-md hover:bg-blue-700"
                        >
                            Lihat Semua Anime
                        </Link>
                    </div>
                    <AnimeList category="ongoing"/>
                </section>
            </main>
        </>
    );
}
