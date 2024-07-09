import { useState } from "react";

const LinkItems = ({ details }) => {
  if (!details) return null;

  const { titles, states, venues, events, sounds, hospitalities, coverages, makeups } = details;
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      tabIndex={0}
      className="dropdown-content z-[1] left-0 md:-left-36 top-[70px] menu shadow-lg bg-white rounded-lg w-full md:w-max mt-2"
    >
      <div className={`grid grid-cols-${titles.length} gap-10 p-5 w-full`}>
        {titles?.map((title, index) => (
          <div key={index} className="grid content-start w-full">
            <div className="font-bold text-lg text-primary mb-2">
              {title}
            </div>
            {title === "By Location" && states && (
              <div className="space-y-2 py-2 text-gray-700">
                {states
                  .slice(0, showAll ? states.length : 4)
                  .map((state, index) => (
                    <div key={index}>{state}</div>
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
              <div className="space-y-2 py-2 items-start text-gray-700">
                {venues.map((venue, index) => (
                  <div key={index}>{venue}</div>
                ))}
              </div>
            )}
            {title === "By Event" && events && (
              <div className="space-y-2 py-2 text-gray-700">
                {events.map((event, index) => (
                  <div key={index}>{event}</div>
                ))}
              </div>
            )}
            {title === "By Sound" && sounds && (
              <div className="space-y-2 py-2 text-gray-700">
                {sounds.map((sound, index) => (
                  <div key={index}>{sound}</div>
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
                  <div key={index}>{hospitality}</div>
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
                  <div key={index}>{coverage}</div>
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
                  <div key={index}>{makeup}</div>
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
