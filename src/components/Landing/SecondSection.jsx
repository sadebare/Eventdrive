import DescItem from "../DescItem";
import SectionTitle from "../SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SecondSection = () => {
  const description = [
    {
      title: "Gwarimpa",
      icon: "/gwarimpa.svg",
      sub: (
        <>
          Vendor <span className="text-black">|</span> Venue
        </>
      ),
      cont: true,
    },
    {
      title: "Karu",
      icon: "/karu.svg",
      sub: (
        <>
          Vendor <span className="text-black">|</span> Venue
        </>
      ),
      cont: true,
    },
    {
      title: "Wuse 2",
      icon: "wuseII.svg",
      sub: (
        <>
          Vendor <span className="text-black">|</span> Venue
        </>
      ),
      cont: true,
    },
    {
      title: "Utako",
      icon: "/utako.svg",
      sub: (
        <>
          Vendor <span className="text-black">|</span> Venue
        </>
      ),
      cont: true,
    },
    {
      title: "Maitama",
      icon: "/gwarimpa.svg",
      sub: (
        <>
          Vendor <span className="text-black">|</span> Venue
        </>
      ),
      cont: true,
    },
    {
      title: "Area 1",
      icon: "/karu.svg",
      sub: (
        <>
          Vendor <span className="text-black">|</span> Venue
        </>
      ),
      cont: true,
    },
    {
      title: "Jikwoyi",
      icon: "/utako.svg",
      sub: (
        <>
          Vendor <span className="text-black">|</span> Venue
        </>
      ),
      cont: true,
    },
    {
      title: "Bwari",
      icon: "/wuseII.svg",
      sub: (
        <>
          Vendor <span className="text-black">|</span> Venue
        </>
      ),
      cont: true,
    },
  ];

  return (
    <div className="align-element my-10 animate-fade-left">
      <SectionTitle text="Popular Vendors/Venues" />
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView={3}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        className="preview"
      >
        {description.map((item, index) => (
          <SwiperSlide key={index} className="mb-3">
            <DescItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-5 my-5"></div>
    </div>
  );
};

export default SecondSection;
