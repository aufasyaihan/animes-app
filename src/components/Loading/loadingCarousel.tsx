const LoadingCarousel: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 w-full mt-4 mx-auto items-center sm:items-start animate-pulse">
            <div className="w-full flex gap-2">
                <div className="w-full h-[350px] bg-gray-600"></div>
                <div className="w-full h-[350px] bg-gray-600"></div>
                <div className="w-full h-[350px] bg-gray-600"></div>
                <div className="w-full h-[350px] bg-gray-600"></div>
                <div className="w-full h-[350px] bg-gray-600"></div>
            </div>
            <div className="w-64 h-5 bg-gray-600 mx-auto"></div>
        </div>
    );
};

export default LoadingCarousel;
