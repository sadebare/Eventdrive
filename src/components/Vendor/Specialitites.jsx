import { AiOutlinePicture } from "react-icons/ai";
import { BsCameraVideoFill, BsFillSpeakerFill } from "react-icons/bs";
import { FaLifeRing } from "react-icons/fa";

const Specialitites = ({ vendors }) => {
  const pro = "bg-green-200 text-green-600 rounded-md font-semibold w-full";
  const con = "bg-red-200 text-red-600 rounded-md font-semibold w-full";

  return (
    <div className="space-y-5 pb-10">
      <div className="space-y-5">
        <div className="bg-base-200 p-2 font-semibold rounded-md text-lg">
          Specialities
        </div>
      </div>
      <div className="grid grid-cols-2 md:flex md:justify-between py-5 gap-7">
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <AiOutlinePicture />
          </div>
          <div className="tracking-tighter font-semibold">Event Coverage</div>
          <div className={`${vendors.eventCoverage ? pro : con}`}>
            {vendors.eventCoverage ? 'Available' : 'Not Available'}
          </div>
        </div>
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <BsCameraVideoFill />
          </div>
          <div className="tracking-tighter font-semibold">Studio Shot</div>
          <div className={`${vendors.studioShot ? pro : con}`}>
            {vendors.studioShot ? 'Available' : 'Not Available'}
          </div>
        </div>
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <AiOutlinePicture />
          </div>
          <div className="tracking-tighter font-semibold">Pre-Event Shot</div>
          <div className={`${vendors.preeventShot ? pro : con}`}>
            {vendors.preeventShot ? 'Available' : 'Not Available'}
          </div>
        </div>
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <FaLifeRing />
          </div>
          <div className="tracking-tighter font-semibold">Lifestyle</div>
          <div className={`${vendors.lifestyle ? pro : con}`}>
            {vendors.lifestyle ? 'Available' : 'Not Available'}
          </div>
        </div>
        <div className="text-center space-y-1 w-full md:w-44">
          <div className="text-yellow-500 flex justify-center text-3xl">
            <BsFillSpeakerFill />
          </div>
          <div className="tracking-tighter font-semibold">Equipment Rental</div>
          <div className={`${vendors.equipmentRental ? pro : con}`}>
            {vendors.equipmentRental ? 'Available' : 'Not Available'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialitites;
