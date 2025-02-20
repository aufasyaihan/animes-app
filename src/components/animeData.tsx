import Image from "next/image";

interface AnimeDataProps {
    images: {
        webp: {
            image_url: string;
        };
    };
    title: string;
}

const AnimeData: React.FC<AnimeDataProps> = ({images, title}) => {
    return (
        <>
            <div className="h-64 overflow-hidden">
                <Image
                    src={images.webp.image_url}
                    alt={title}
                    width={200}
                    height={300}
                    priority
                    className="object-cover w-full group-hover:scale-110 transition-all ease-out duration-500"
                />
            </div>
            <h2 className="p-2">
                <p className="font-bold w-full text-ellipsis whitespace-nowrap overflow-hidden">
                    {title}
                </p>
            </h2>
        </>
    );
};

export default AnimeData;
