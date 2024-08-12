import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./eventBooking.css";

const EventImage = ({ events }) => {
  return (
    <div className="md:col-span-2 md:-mt-8 md:mb-0 mb-8">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="swiper"
      >
        {events.image.map((img, index) => (
          <SwiperSlide key={index} className="">
            <div className="h-60 md:h-[330px] md:w-full">
              <img src={img} className="w-full rounded-2xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventImage;
