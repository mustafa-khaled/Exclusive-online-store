import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwiperComponent({ data, children }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        500: {
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
      <SwiperSlide>
        {data?.length > 0 &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <img src={data.image} alt={data.title} />
                <h4>{data.title}</h4>
                <p>{data.description}</p>
              </div>
            );
          })}

        {children}
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperComponent;
