import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const ActiveSlider = () => {
  return (
    <div className="flex flex-center justify-center flex-col h-screen bg-[#0284c7]">
      <Swiper
        breackpoints={{
          340: {
            slidesPreView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPreView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w[80%]">
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] md:h-[400px] md:w-[350px]">
              <div className="absolute inset-0 bg-cover bg-center"
              style={{backgroundImage: `url(${item.backgroundImage})`}}
              >

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ActiveSlider;
