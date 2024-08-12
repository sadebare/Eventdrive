import { FaClock, FaHotel, FaMapMarkerAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const About = ({ events }) => {
  return (
    <div className="space-y-5">
      <div className="space-y-5">
        <div className="bg-base-200 p-2 font-semibold rounded-md text-lg">
          {events.title}
        </div>
        <div
          className="text-sm tracking-wide leading-5"
          dangerouslySetInnerHTML={{ __html: events.about }}
        ></div>
      </div>
      <div className="grid md:grid-cols-4 pb-10 space-y-4 md:space-y-0">
        <div className="text-center md:border-r-2 md:border-r-gray-400 pr-2">
          <div className="bg-yellow-500 text-base-100 flex justify-center items-center text-3xl py-2 rounded-l-md">
            <FaHotel />
          </div>
          <div className="font-bold text-xl pt-4">{events.venue}</div>
          <div className="px-20 text-sm pt-1">{events.eventDescription}</div>
        </div>
        <div className="text-center md:border-r-2 md:border-r-gray-400 px-2">
          <div className="bg-yellow-500 text-base-100 flex justify-center items-center text-3xl py-2">
            <MdGroups />
          </div>
          <div className="font-bold text-xl pt-4">{events.guest} Guests</div>
          <div className="px-16 text-sm pt-1">{events.guestDescription}</div>
        </div>
        <div className="text-center md:border-r-2 md:border-r-gray-400 px-2">
          <div className="bg-yellow-500 text-base-100 flex justify-center items-center text-3xl py-2">
            <FaMapMarkerAlt />
          </div>
          <div className="font-bold text-xl pt-4">Address</div>
          <div className="px-16 text-sm pt-1">{events.fullAddress}</div>
        </div>
        <div className="text-center pl-2">
          <div className="bg-yellow-500 text-base-100 flex justify-center items-center text-3xl py-2 rounded-r-md">
            <FaClock />
          </div>
          <div className="font-bold text-xl pt-4">Service</div>
          <div className="px-20 text-sm pt-1">{events.workTime}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
