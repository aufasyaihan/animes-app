const LoadingAnimeList: React.FC = () => {
    return (
        <div className="grid grid-cols-5 justify-between gap-4 w-full mx-auto pb-8 animate-pulse">
            <div className="w-full h-[300px] bg-gray-600"></div>
            <div className="w-full h-[300px] bg-gray-600"></div>
            <div className="w-full h-[300px] bg-gray-600"></div>
            <div className="w-full h-[300px] bg-gray-600"></div>
            <div className="w-full h-[300px] bg-gray-600"></div>
        </div>
    );
};

export default LoadingAnimeList;
