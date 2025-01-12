import Carousel from "@/components/carousel";

export default function Home() {
    return (
        <>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <Carousel />
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </>
    );
}
