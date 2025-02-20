export default function LoadingAnimeDetail() {
    return (
        <article className="flex flex-col gap-2 mx-auto w-3/4 h-full my-4 items-center sm:items-start animate-pulse">
            <header className="flex gap-4 w-full">
                <div className="w-[200px] h-[300px] bg-gray-700 rounded-md"></div>
                <div className="flex flex-col gap-2 flex-1 w-full">
                    <div className="h-8 w-full bg-gray-700 rounded"></div>
                    <div className="flex gap-2">
                        <div className="h-6 w-16 bg-gray-700 rounded"></div>
                        <div className="h-6 w-16 bg-gray-700 rounded"></div>
                        <div className="h-6 w-16 bg-gray-700 rounded"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="h-6 w-20 bg-gray-700 rounded"></h3>
                        <div className="flex gap-2">
                            <div className="h-6 w-16 bg-gray-700 rounded"></div>
                            <div className="h-6 w-16 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="h-6 w-20 bg-gray-700 rounded"></h3>
                        <div className="flex gap-2">
                            <div className="h-6 w-16 bg-gray-700 rounded"></div>
                            <div className="h-6 w-16 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex flex-col gap-2 w-full">
                <h3 className="h-6 w-20 bg-gray-700 rounded"></h3>
                <div className="h-20 w-full bg-gray-700 rounded"></div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <h3 className="h-6 w-20 bg-gray-700 rounded"></h3>
                <div className="flex flex-col items-center gap-2 w-full">
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 w-full"
                        >
                            <div className="h-10 w-10 bg-gray-700 rounded-sm"></div>
                            <div className="flex gap-2 bg-gray-600 w-full p-2 rounded-sm">
                                <div className="h-6 w-3/4 bg-gray-700 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
