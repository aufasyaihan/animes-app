import Carousel from "@/components/carousel";

export default function Home() {
    return (
        <>
            <main className="flex flex-col w-full mt-4 items-center sm:items-start">
                <div className="flex flex-col gap-4 w-full mt-4 items-center sm:items-start">
                    <h1 className="text-xl font-bold w-[70%] mx-auto">Popular Anime</h1>
                    <Carousel />
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </>
    );
}
