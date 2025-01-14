import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useSwiper } from "swiper/react";

export default function SwiperButton() {
    const swiper = useSwiper();

    return (
        <div className="text-right h-8">
        <button onClick={() => swiper.slidePrev()} className="text-2xl p-10">
            <IoIosArrowDropleftCircle />
        </button>
        <button onClick={() => swiper.slideNext()} className="text-2xl p-10">
            <IoIosArrowDroprightCircle />
        </button>
        </div>
    );
}
