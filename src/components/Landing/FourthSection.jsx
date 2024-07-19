import DescItem from "../DescItem";
import SectionTitle from "../SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const FourthSection = () => {
  const description = [
    {
      name: "Silvia Adeleke",
      role: "Head of Events | Event Drive",
      remark:
        "Morbi ut vulputate nulla, ac fermentum metus. Phasellus ut nunc imperdiet, gravida nisl non, hendrerit eros.",
    },
    {
      name: "Adam Uchemba",
      role: "Event Planner | 347 Events",
      remark:
        "Morbi ut vulputate nulla, ac fermentum metus. Phasellus ut nunc imperdiet, gravida nisl non, hendrerit eros.",
    },
    {
      name: "Gabriel Simeon",
      role: "Private Planner | Forhter",
      remark:
        "Morbi ut vulputate nulla, ac fermentum metus. Phasellus ut nunc imperdiet, gravida nisl non, hendrerit eros.",
    },
    {
      name: "Ngozi Richards",
      role: "Procurement Officer | R&R",
      remark:
        "Morbi ut vulputate nulla, ac fermentum metus. Phasellus ut nunc imperdiet, gravida nisl non, hendrerit eros.",
    },
    {
      name: "Deborah Achor",
      role: "Director, Events | DailyLife",
      remark:
        "Morbi ut vulputate nulla, ac fermentum metus. Phasellus ut nunc imperdiet, gravida nisl non, hendrerit eros.",
    },
  ];

  return (
    <section className="align-element py-8">
      <SectionTitle text="What Event Planners are Saying" />
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
          <SwiperSlide key={index}>
            <DescItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FourthSection;
