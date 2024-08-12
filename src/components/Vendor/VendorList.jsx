import { useSelector } from "react-redux";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./vendorList.css";
import { Link } from "react-router-dom";
import {
  FaCamera,
  FaCrown,
  FaHeart,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import { FaBowlFood, FaPlateWheat, FaRotate } from "react-icons/fa6";
import { AiOutlinePicture } from "react-icons/ai";
import { MdGroups } from "react-icons/md";

const getIconForOffer = (offer) => {
  switch (offer) {
    case "Event Coverage":
    case "Pre-Event":
      return <AiOutlinePicture className="text-yellow-500" />;
    case "Photo Booth":
      return <FaCamera className="text-yellow-500" />;
    case "Family-Style":
      return <FaCrown className="text-yellow-500" />;
    case "Full-Service":
      return <FaRotate className="text-yellow-500" />;
    case "Plated Meals":
      return <FaPlateWheat className="text-yellow-500" />;
    case "Buffet-Style":
      return <FaBowlFood className="text-yellow-500" />;
    default:
      return null;
  }
};

const VendorList = () => {
  const vendors = useSelector((store) => store.vendors.vendors);

  return (
    <div className="md:grid md:grid-cols-2 md:gap-x-16 md:mx-5 md:w-full border-t md:border-y">
      {vendors.map((vendor) => {
        const { id, vendors } = vendor;
        return (
          <div key={id} className="grid pt-5 md:py-5 w-full border-b md:border-none">
            <div className="grid w-full">
              <Swiper
                pagination={{
                  enabled: false,
                }}
                modules={[Pagination]}
                className="swiper"
              >
                {vendors.image.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-56 md:h-72 w-full">
                      <img
                        src={img}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="grid gap-2 my-5 md:my-4">
              <Link
                to={`/vendor/${id}`}
                className="text-3xl md:text-4xl font-semibold"
              >
                {vendors.title}
              </Link>
              <div className="flex justify-between items-center gap-2 text-2xl">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-yellow-500" />
                  <div>
                    {vendors.address}, {vendors.state}
                  </div>
                </div>
                <FaHeart size={25} />
              </div>
              <div className="grid grid-cols-2 gap-2 text-lg">
                {vendors.offers.map((offer, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {getIconForOffer(offer)}
                    <span>{offer}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 text-lg">
                <div className="flex items-center gap-2 w-fit">
                  <FaStar className="text-yellow-500" />
                  <div className="font-semibold">{vendors.rating}</div>
                  <div className="pl-1">
                    ({vendors.review} Review{vendors.review > 1 && "s"})
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MdGroups size={30} className="text-yellow-500" />
                  <div
                    className={`${
                      vendors.eventsDone < 1 && "text-gray-400"
                    } font-semibold`}
                  >
                    {vendors.eventsDone} Events
                  </div>
                </div>
              </div>
              <div>{vendors.summary}</div>
              <div className="button-style bg-yellow-500 py-4 mt-4 w-full text-center">
                Check Rate
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VendorList;
