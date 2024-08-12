import { FaHeart, FaHotel, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./venueList.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VenueList = () => {
  const venues = useSelector((store) => store.venues.venues);

  return (
    <div>
      {venues.map((venue) => {
        const { id, events } = venue;
        return (
          <div key={id} className="grid md:grid-cols-3 md:gap-10 border-y py-5">
            <div className="grid w-fit">
              <Swiper
                pagination={{
                  enabled: false,
                }}
                modules={[Pagination]}
                className="swiper"
              >
                {events.image.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-56 md:h-72 w-full">
                      <img src={img} className="w-full rounded-2xl" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="grid gap-2 md:col-span-2 my-5 md:my-0">
              <div className="flex items-center justify-between">
                <Link
                  to={`/events/${id}`}
                  className="text-3xl md:text-4xl font-semibold"
                >
                  {events.title}
                </Link>
                <FaHeart size={25} />
              </div>
              <div className="flex justify-between md:block space-y-2">
                <div className="flex items-center gap-2 text-2xl">
                  <FaMapMarkerAlt className="text-yellow-500" />
                  <div>
                    {events.address}, {events.state}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-lg">
                  <FaHotel className="text-yellow-500" />
                  <div>{events.venue}</div>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-normal gap-5 text-lg">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <div>{events.rating}</div>
                  <div className="pl-1">
                    ({events.review} Review{events.review > 1 && "s"})
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MdGroups className="text-yellow-500" />
                  <div className="font-semibold">
                    {events.guest} Guest{events.guest > 1 && "s"}
                  </div>
                </div>
              </div>
              <div className="tracking-tight">{events.summary}</div>
              <div className="justify-self-end space-y-2">
                <div className="font-bold text-xl">{events.cost}</div>
                <div className="button-style bg-yellow-500 w-fit">
                  Check Availability
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VenueList;
