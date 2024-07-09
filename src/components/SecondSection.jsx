import Slider from "react-slick";
import DescItem from "./DescItem";

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

  const settings = {
    dots: true,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "30px",
    speed: 500,
    slidesToShow: 4,
    customPaging: (i) => (
      <button className="w-2.5 h-2.5 rounded-full hover:bg-primary transition duration-300"></button>
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="align-element my-10">
      <Slider {...settings}>
        {description.map((item, index) => (
          <div key={index}>
            <DescItem {...item} />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center gap-5 my-5"></div>
    </div>
  );
};

export default SecondSection;
