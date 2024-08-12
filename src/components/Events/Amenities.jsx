import { FaChair, FaParking, FaWifi } from "react-icons/fa";
import { MdElectricBolt, MdEventSeat } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoMdHeadset } from "react-icons/io";

const Amenities = ({ events }) => {
  const pro = "bg-green-200 text-green-600 rounded-md font-semibold w-full";
  const con = "bg-red-200 text-red-600 rounded-md font-semibold w-full";

  return (
    <div className="space-y-5 pb-10">
      <div className="space-y-5">
        <div className="bg-base-200 p-2 font-semibold rounded-md text-lg">
          Amenities
        </div>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-7 py-5">
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <MdEventSeat />
          </div>
          <div className="tracking-tighter font-semibold">Indoor Seating</div>
          <div className={pro}>{events.indoorSeating}</div>
        </div>
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <FaChair />
          </div>
          <div className="tracking-tighter font-semibold">Outdoor Seating</div>
          <div className={pro}>{events.outdoorSeating}</div>
        </div>
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <MdElectricBolt />
          </div>
          <div className="tracking-tighter font-semibold">Backup Power</div>
          <div className={pro}>{events.backup}</div>
        </div>
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <GiForkKnifeSpoon />
          </div>
          <div className="tracking-tighter font-semibold">Indoor Catering</div>
          <div className={pro}>{events.indoorCatering}</div>
        </div>
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <FaWifi />
          </div>
          <div className="tracking-tighter font-semibold">Internet</div>
          <div className={pro}>{events.internet}</div>
        </div>
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <IoMdHeadset />
          </div>
          <div className="tracking-tighter font-semibold">DJ</div>
          <div className={con}>{events.dj}</div>
        </div>
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <FaParking />
          </div>
          <div className="tracking-tighter font-semibold">Parking Space</div>
          <div className={pro}>{events.parking}</div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
