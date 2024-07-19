import { FaHeart, FaHotel, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

const VenueList = () => {
  return (
    <div className="grid md:grid-cols-3 md:gap-10 border-y py-5">
      <div className="grid w-fit">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          centeredSlides={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-72 w-full">
              <img src="/event.svg" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-72 w-full">
              <img src="/event2.svg" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-72 w-full">
              <img src="/event3.svg" className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid gap-2 md:col-span-2">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-semibold">
            Gateway Hotels and Events
          </div>
          <FaHeart size={25} />
        </div>
        <div className="flex justify-between md:block space-y-2">
          <div className="flex items-center gap-2 text-2xl">
            <FaMapMarkerAlt className="text-yellow-500" />
            <div>Area 1, Abuja</div>
          </div>
          <div className="flex items-center gap-1 text-lg">
            <FaHotel className="text-yellow-500" />
            <div>Hotel</div>
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-normal gap-5 text-lg">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <div>4.3</div>
            <div className="pl-1">(3 Reviews)</div>
          </div>
          <div className="flex items-center gap-2">
            <MdGroups className="text-yellow-500" />
            <div className="font-semibold">300 Guests</div>
          </div>
        </div>
        <div>
          Duis bibendum tristique aliquam. Quisque suscipit finibus nibh. Fusce
          ac ultrices neque. Nam ut viverra purus.
        </div>
        <div className="justify-self-end space-y-2">
          <div className="font-bold text-xl">NGN 3,050,000.00</div>
          <div className="button-style bg-yellow-500 w-fit">Check Availability</div>
        </div>
      </div>
    </div>
  );
};

export default VenueList;
