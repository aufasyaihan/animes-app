"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { AnimeDataType } from "@/types/animeList";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from "./UI/swiperButton";

export default function Carousel({ animes }: { animes: AnimeDataType[] }) {
    return (
        <div className="flex flex-col gap-2 w-full mx-auto">
            <div className="relative">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={5}
                    slidesPerView={5}
                    pagination={{ clickable: true }}
                    loop={animes?.length > 4}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    autoplay={{
                        delay: 3000,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 5,
                        },
                    }}
                >
                    {animes?.length > 0 &&
                        animes.map((anime) => (
                            <SwiperSlide
                                key={anime.mal_id}
                                className="overflow-hidden mb-3"
                            >
                                <Link
                                    href={`/animes/${anime.mal_id}`}
                                    key={anime.mal_id}
                                    className="w-fit h-full overflow-hidden relative group"
                                >
                                    <Image
                                        src={anime.images.webp.image_url}
                                        alt={anime.title}
                                        width={150}
                                        height={100}
                                        priority
                                        className="w-full h-[350px] object-cover group-hover:scale-110 transition ease-out duration-500 cursor-pointer"
                                    />
                                    <div className="bg-gradient-to-t from-black w-full h-full absolute bottom-0"></div>
                                    <div className="absolute bottom-0 text-wrap w-full px-4 py-2">
                                        {anime.title}
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    <SwiperButton />
                </Swiper>
            </div>
        </div>
    );
}
