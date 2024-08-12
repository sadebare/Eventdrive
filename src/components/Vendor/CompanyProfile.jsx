import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import Specialitites from "./Specialitites";

const CompanyProfile = ({ vendors }) => {
  return (
    <div className="space-y-5">
      <div className="space-y-5">
        <div className="bg-base-200 p-2 font-semibold rounded-md text-lg">
          Company Profile
        </div>
        <div
          className="text-sm tracking-wide leading-5"
          dangerouslySetInnerHTML={{ __html: vendors.about }}
        ></div>
      </div>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <div className="text-center md:border-r-2 md:border-r-gray-400 px-2">
          <div className="bg-yellow-500 text-base-100 flex justify-center items-center text-3xl py-2 md:rounded-l-md">
            <MdGroups />
          </div>
          <div className="font-bold text-xl pt-4">
            {vendors.eventsDone} Events
          </div>
          <div className="px-16 text-sm pt-1">Successfully covered</div>
        </div>
        <div className="text-center md:border-r-2 md:border-r-gray-400 px-2">
          <div className="bg-yellow-500 text-base-100 flex justify-center items-center text-3xl py-2">
            <FaMapMarkerAlt />
          </div>
          <div className="font-bold text-xl pt-4">Address</div>
          <div className="px-16 text-sm pt-1">{vendors.fullAddress}</div>
        </div>
        <div className="text-center pl-2">
          <div className="bg-yellow-500 text-base-100 flex justify-center items-center text-3xl py-2 md:rounded-r-md">
            <FaClock />
          </div>
          <div className="font-bold text-xl pt-4">Service Availability</div>
          <div className="px-20 text-sm pt-1">{vendors.workTime}</div>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4 md:pb-0">
        <div className="text-yellow-500 font-semibold text-xl">
          Contact Person
        </div>
        <div className="flex gap-5 bg-gray-50 p-5 rounded-md">
          <img src={vendors.contactImage} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{vendors.contactPerson}</h3>
            <div className="grid md:flex gap-1">
              <span className="text-yellow-500">{vendors.contactRole},</span>
              {vendors.title}
            </div>
            <p className="text-gray-500">{vendors.contactMail}</p>
            <p>{vendors.fullAddress}</p>
          </div>
        </div>
      </div>

      <Specialitites vendors={vendors} />
    </div>
  );
};

export default CompanyProfile;
