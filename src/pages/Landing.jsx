import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../data";
import {
  FourthSection,
  Hero,
  Logos,
  SecondSection,
  ThirdSection,
} from "../components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Landing = () => {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 -left-5 md:left-0 z-10 bg-yellow-500 text-white w-8 h-8 rounded-full flex justify-center items-center -ml-5 transform -translate-y-1/2 focus:outline-none hover:bg-gray-700 transition duration-300"
      onClick={onClick}
    >
      <FaAngleLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 -right-5 md:right-0 z-10 bg-yellow-500 text-white w-8 h-8 rounded-full flex justify-center items-center -mr-5 transform -translate-y-1/2 focus:outline-none hover:bg-gray-700 transition duration-300"
      onClick={onClick}
    >
      <FaAngleRight />
    </button>
  );

  return (
    <main>
      <Hero
        title="Empowering Your Event Vision, Step by Step"
        subText="Welcome to Event Drive, where your perfect event starts to take shape."
        firstInput="Find venue"
        secondInput="Find vendor"
        link="hero.jpg"
      />
      <div className="mx-auto md:max-w-[94vw] lg:max-w-[94vw] 2xl:max-w-[80vw] max-w-[75vw] py-7 md:py-10 animate-fade-up">
        <Slider
          {...settings}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {images.map((image) => (
            <div key={image.id}>
              <Logos logo={image.logo} title={image.title} />
            </div>
          ))}
        </Slider>
      </div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </main>
  );
};

export default Landing;
