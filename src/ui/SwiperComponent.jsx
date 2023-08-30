import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
//

function SwiperComponent({ data }) {
  return (
    <Swiper
      className=" w-full"
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        450: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {data?.length > 0 &&
        data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className=" p-[20px] text-primary">
                <img src={item.image} alt={item.title} className="w-full" />
                <h4 className="mt-[10px] text-xl font-semibold">
                  {item.title}
                </h4>
                <p className="text-sm">{item.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

export default SwiperComponent;
