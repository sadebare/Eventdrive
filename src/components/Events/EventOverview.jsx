import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const EventOverview = ({ events }) => {
  return (
    <div className="grid gap-2 md:gap-0 md:grid-cols-3">
      <div className="grid gap-2">
        <div className="text-2xl md:text-3xl font-semibold">{events.title}</div>
        <div className="flex items-center gap-2 text-xl">
          <FaMapMarkerAlt className="text-yellow-500" />
          <div>
            {events.address}, {events.state}
          </div>
        </div>
      </div>
      <div className="flex text-xl gap-2 items-center md:items-start md:justify-self-center">
        <FaHeart size={25} />
        <FaStar size={25} className="text-yellow-500" />
        <div className="font-semibold">{events.rating}</div>
        <div className="pl-1">
          ({events.review} Review{events.review > 1 && "s"})
        </div>
      </div>
      <div className="grid gap-2 md:justify-self-end">
        <div className="flex gap-2 items-center md:items-start md:justify-self-end">
          <MdGroups size={36} className="text-yellow-500" />
          <div className="text-xl font-semibold">
            {events.guest} Guest{events.guest > 1 && "s"}
          </div>
        </div>
        <div className="font-bold text-2xl">{events.cost}</div>
      </div>
    </div>
  );
};

export default EventOverview;
