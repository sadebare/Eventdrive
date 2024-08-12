import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const VendorImage = ({ vendors }) => {
  return (
    <div className="md:col-span-2 mt-8 md:-mt-8 md:mb-0 mb-8">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="swiper"
      >
        {vendors.image.map((img, index) => (
          <SwiperSlide key={index} className="">
            <div className="h-72 md:h-96 md:w-full">
              <img src={img} className="w-full rounded-2xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VendorImage;
