import { useState } from "react";
import SectionTitle from "../SectionTitle";
import TabSwitcher from "../TabSwitcher";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const venues = [
  {
    name: "Riverview Hotel",
    image: "/event1.svg",
    location: "Gwagwalada, Abuja",
    rating: 2.5,
    reviews: 0,
  },
  {
    name: "Bella Bricks",
    image: "/event2.svg",
    location: "Zone 4, Abuja",
    rating: 4.5,
    reviews: 0,
  },
  {
    name: "Rainbow Resort",
    image: "/event3.svg",
    location: "Bwari, Abuja",
    rating: 3.2,
    reviews: 4,
  },
  {
    name: "Marina Hotel",
    image: "/event4.svg",
    location: "Lugbe, Abuja",
    rating: 2.5,
    reviews: 5,
  },
];

const vendors = [
  {
    name: "Darwin Digitals",
    image: "/vendor3.svg",
    location: "Utako, Abuja",
    rating: 2.5,
    reviews: 0,
  },
  {
    name: "Midnight Studios",
    image: "/vendor4.svg",
    location: "Wuye, Abuja",
    rating: 4.5,
    reviews: 0,
  },
  {
    name: "Maria Events",
    image: "/vendor5.svg",
    location: "Gaduwa, Abuja",
    rating: 3.2,
    reviews: 4,
  },
  {
    name: "Derby Cakes",
    image: "/vendor6.svg",
    location: "Lifecamp, Abuja",
    rating: 2.5,
    reviews: 5,
  },
];

const Similar = ({ text }) => {
  const [activeTab, setActiveTab] = useState("Location");

  return (
    <div className="align-element my-10 animate-fade-left">
      <SectionTitle text={text} />
      <TabSwitcher
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={["Location", "Venue Type", "Event"]}
      />
      {/* DESKTOP */}
      {text === "Similar Venues" ? (
        <div className="hidden md:flex justify-between py-8">
          {venues.map((venue, index) => {
            const { name, image, location, rating, reviews } = venue;
            return (
              <div key={index} className="space-y-2">
                <img src={image} alt="" />
                <div className="text-2xl font-semibold">{name}</div>
                <div className="flex items-center gap-1 text-lg font-semibold">
                  <FaMapMarkerAlt className="text-yellow-500" />
                  {location}
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <span className="font-bold">{rating}</span>
                  <span className="pl-2">
                    ({reviews} Review{reviews > 0 && "s"})
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="hidden md:flex justify-between py-8">
          {vendors.map((vendor, index) => {
            const { name, image, location, rating, reviews } = vendor;
            return (
              <div key={index} className="space-y-2">
                <img src={image} alt="" />
                <div className="text-2xl font-semibold">{name}</div>
                <div className="flex items-center gap-1 text-lg font-semibold">
                  <FaMapMarkerAlt className="text-yellow-500" />
                  {location}
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <span className="font-bold">{rating}</span>
                  <span className="pl-2">
                    ({reviews} Review{reviews > 0 && "s"})
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* MOBILE */}
      {text === "Similar Venues" ? (
        <div className="md:hidden py-8">
          <Swiper
            modules={[Pagination]}
            pagination={{
              enabled: false,
            }}
            spaceBetween={10}
            loop={true}
            slidesPerView={1.15}
            grabCursor={true}
            className="preview"
          >
            {venues.map((venue, index) => (
              <SwiperSlide key={index} className="">
                <div className="grid gap-2">
                  <img src={venue.image} className="" alt={venue.name} />
                  <div className="text-gray-800 space-y-1">
                    <div className="text-xl font-bold">{venue.name}</div>
                    <div className="flex items-center gap-1 text-base font-semibold">
                      <FaMapMarkerAlt className="text-yellow-500" />
                      {venue.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FaStar className="text-yellow-500" />
                      <span className="font-bold">{venue.rating}</span>
                      <span className="pl-2 font-normal">
                        ({venue.reviews} Review{venue.reviews > 1 ? "s" : ""})
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="md:hidden py-8">
          <Swiper
            modules={[Pagination]}
            pagination={{
              enabled: false,
            }}
            spaceBetween={10}
            loop={true}
            slidesPerView={1.15}
            grabCursor={true}
            className="preview"
          >
            {vendors.map((vendor, index) => (
              <SwiperSlide key={index} className="">
                <div className="grid gap-2">
                  <img src={vendor.image} className="" alt={vendor.name} />
                  <div className="text-gray-800 space-y-1">
                    <div className="text-xl font-bold">{vendor.name}</div>
                    <div className="flex items-center gap-1 text-base font-semibold">
                      <FaMapMarkerAlt className="text-yellow-500" />
                      {vendor.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FaStar className="text-yellow-500" />
                      <span className="font-bold">{vendor.rating}</span>
                      <span className="pl-2 font-normal">
                        ({vendor.reviews} Review{vendor.reviews > 1 ? "s" : ""})
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Similar;
