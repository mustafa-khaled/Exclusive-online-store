//  Swiper For About Team Section And Products Home Section
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import Product from "./Product";

function SwiperComponent({ data, isProduct = false }) {
  return (
    <Swiper
      className=" w-full"
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },

        900: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {data?.length > 0 &&
        data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {isProduct ? (
                <Product product={item} showBtn={false} />
              ) : (
                <div className=" p-[20px] text-primary">
                  <img
                    src={item.image || item.imageCover}
                    alt={item.title}
                    className="w-full"
                  />
                  <h4 className="mt-[10px] text-xl font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-sm">{item.description}</p>
                </div>
              )}
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

export default SwiperComponent;
