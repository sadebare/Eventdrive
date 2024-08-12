import { useState } from "react";
import { Link } from "react-router-dom";

const LinkItems = ({ details }) => {
  if (!details) return null;

  const { titles, states, venues, events, sounds, hospitalities, coverages, makeups } = details;
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      tabIndex={0}
      className="z-[1] menu shadow-lg bg-white rounded-lg w-auto"
    >
      <div className={`flex items-start gap-10 p-5`}>
        {titles?.map((title, index) => (
          <div key={index} className="grid">
            <div className="font-bold text-lg text-yellow-500 mb-2">
              {title}
            </div>
            {title === "By Location" && states && (
              <div className="space-y-2 py-2 text-gray-700">
                {states
                  .slice(0, showAll ? states.length : 4)
                  .map((state, index) => (
                    <Link to={`/venues/${state}`} key={index} className="grid cursor-pointer capitalize">
                      {state}
                    </Link>
                  ))}
                {states.length > 4 && (
                  <div
                    onClick={() => setShowAll(!showAll)}
                    className="font-bold text-blue-600 cursor-pointer mt-2"
                  >
                    {showAll ? "View less" : "View more..."}
                  </div>
                )}
              </div>
            )}
            {title === "By Venue Type" && venues && (
              <div className="space-y-2 py-2 text-gray-700">
                {venues.map((venue, index) => (
                  <div key={index} className="cursor-pointer">
                    {venue}
                  </div>
                ))}
                <div
                  onClick={() => setShowAll(!showAll)}
                  className="font-bold text-blue-600 cursor-pointer mt-2"
                >
                  {showAll ? "View less" : "View more..."}
                </div>
              </div>
            )}
            {title === "By Event" && events && (
              <div className="space-y-2 py-2 text-gray-700">
                {events.map((event, index) => (
                  <div key={index} className="cursor-pointer">
                    {event}
                  </div>
                ))}
                <div
                  onClick={() => setShowAll(!showAll)}
                  className="font-bold text-blue-600 cursor-pointer mt-2"
                >
                  {showAll ? "View less" : "View more..."}
                </div>
              </div>
            )}
            {title === "By Sound" && sounds && (
              <div className="space-y-2 py-2 text-gray-700">
                {sounds.map((sound, index) => (
                  <div key={index} className="cursor-pointer">
                    {sound}
                  </div>
                ))}
                <div
                  onClick={() => setShowAll(!showAll)}
                  className="font-bold text-blue-600 cursor-pointer mt-2"
                >
                  {showAll ? "View less" : "View more..."}
                </div>
              </div>
            )}
            {title === "By Hospitality" && hospitalities && (
              <div className="space-y-2 py-2 text-gray-700">
                {hospitalities.map((hospitality, index) => (
                  <div key={index} className="cursor-pointer">
                    {hospitality}
                  </div>
                ))}
                <div
                  onClick={() => setShowAll(!showAll)}
                  className="font-bold text-blue-600 cursor-pointer mt-2"
                >
                  {showAll ? "View less" : "View more..."}
                </div>
              </div>
            )}
            {title === "By Event Coverage" && coverages && (
              <div className="space-y-2 py-2 text-gray-700">
                {coverages.map((coverage, index) => (
                  <div key={index} className="cursor-pointer">
                    {coverage}
                  </div>
                ))}
                <div
                  onClick={() => setShowAll(!showAll)}
                  className="font-bold text-blue-600 cursor-pointer mt-2"
                >
                  {showAll ? "View less" : "View more..."}
                </div>
              </div>
            )}
            {title === "By Makeup" && makeups && (
              <div className="space-y-2 py-2 text-gray-700">
                {makeups.map((makeup, index) => (
                  <div key={index} className="cursor-pointer">
                    {makeup}
                  </div>
                ))}
                <div
                  onClick={() => setShowAll(!showAll)}
                  className="font-bold text-blue-600 cursor-pointer mt-2"
                >
                  {showAll ? "View less" : "View more..."}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="bg-[url(/flower.jpg)] bg-cover bg-no-repeat h-16 -mx-2 -mb-2 rounded-b-lg"></div>
    </div>
  );
};

export default LinkItems;
