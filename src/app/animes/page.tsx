import AnimeList from "@/components/animeList";
import FilterButton from "@/components/UI/filterButton";

export default function AnimesPage() {
    return (
        <section className="flex flex-col gap-4 mx-36 mt-10 h-full">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl font-bold capitalize">
                    Let&apos;s watch some animes
                </h1>
                <FilterButton />
            </div>
            <div>
              <AnimeList category="all"/>
            </div>
        </section>
    );
}
