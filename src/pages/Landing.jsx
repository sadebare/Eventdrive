import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../data";
import {
  Footer,
  FourthSection,
  Logos,
  SecondSection,
  ThirdSection,
} from "../components";
import { TbBuildingSkyscraper, TbUser } from "react-icons/tb";
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
      className="absolute top-1/2 -left-5 md:left-0 z-10 bg-primary text-white w-8 h-8 rounded-full flex justify-center items-center -ml-5 transform -translate-y-1/2 focus:outline-none hover:bg-gray-700 transition duration-300"
      onClick={onClick}
    >
      <FaAngleLeft />
    </button>
  );
  
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 -right-5 md:right-0 z-10 bg-primary text-white w-8 h-8 rounded-full flex justify-center items-center -mr-5 transform -translate-y-1/2 focus:outline-none hover:bg-gray-700 transition duration-300"
      onClick={onClick}
    >
      <FaAngleRight />
    </button>
  );

  return (
    <main>
      <div className="lg:grid">
        <div className="bg-[url('/hero.svg')] bg-cover bg-no-repeat align-element flex flex-col lg:flex-row justify-center py-10 md:py-16">
          <article className="text-center lg:mx-36">
            <h1 className="text-base-100 font-bold text-5xl">
              Empowering Your Event Vision, Step by Step
            </h1>
            <p className="my-7 text-xl md:text-2xl text-primary">
              Welcome to EventDrive, where your perfect event starts to take
              shape.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <label className="input input-bordered flex justify-between items-center gap-2 w-full">
                <input type="text" placeholder="Find venue" className="rounded-md h-10" />
                <TbBuildingSkyscraper color="gray" />
              </label>
              <label className="input input-bordered flex justify-between items-center gap-2 w-full">
                <input type="text" placeholder="Find vendor" className="rounded-md h-10" />
                <TbUser color="gray" />
              </label>
              <button type="submit" className="bg-primary button-style">Search</button>
            </div>
          </article>
        </div>
        <div className="mx-auto md:max-w-[94vw] lg:max-w-[94vw] 2xl:max-w-[80vw] max-w-[75vw] py-7 md:py-10">
          <Slider {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
            {images.map((image) => (
              <div key={image.id}>
                <Logos logo={image.logo} />
              </div>
            ))}
          </Slider>
        </div>
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
      </div>
    </main>
  );
};

export default Landing;
