import { FaHeart, FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";
import VendorImage from "./VendorImage";
import { MdGroups } from "react-icons/md";
import { BsChatTextFill } from "react-icons/bs";

const VendorOverview = ({ vendors }) => {
  return (
    <>
      <div className="grid gap-2 md:gap-0 md:flex md:justify-between">
        <div className="grid gap-2">
          <div className="text-2xl md:text-3xl font-semibold">
            {vendors.title}
          </div>
          <div className="flex items-center gap-2 text-xl">
            <FaMapMarkerAlt className="text-yellow-500" />
            <div>
              {vendors.address}, {vendors.state}
            </div>
          </div>
        </div>
        <div className="flex text-xl gap-2 items-center md:items-start md:justify-self-center">
          <FaHeart size={25} />
          <FaStar size={25} className="text-yellow-500" />
          <div className="font-semibold">{vendors.rating}</div>
          <div className="pl-1">
            ({vendors.review} Review{vendors.review > 1 && "s"})
          </div>
        </div>
      </div>
      <VendorImage vendors={vendors} />
      <div className="grid gap-2 md:flex md:justify-between md:items-start">
        <div className="flex gap-2 items-center">
          <MdGroups size={36} className="text-yellow-500" />
          <div className="text-xl font-semibold">
            {vendors.eventsDone} Event{vendors.eventsDone > 1 && "s"}
          </div>
        </div>
        <div className="text-lg space-y-2 md:space-y-0">
          <div className="flex items-center gap-2 md:justify-end">
            <FaPhone className="rotate-90 text-yellow-500 text-xl md:text-base" />
            <span className="font-bold">{vendors.phoneNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <BsChatTextFill className="text-yellow-500 text-xl md:text-base" />
            <span className="text-gray-600">Chat with the venue manager</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorOverview;
