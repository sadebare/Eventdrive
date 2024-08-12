import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import {
  About,
  Amenities,
  EventBooking,
  EventImage,
  EventOverview,
  EventGallery,
  PageNav,
  Reviews,
  TabSwitcher,
} from "../components";

import "swiper/css";
import "swiper/css/pagination";

const Events = () => {
  const [activeTab, setActiveTab] = useState("About");
  const { eventId } = useParams();

  const event = useSelector((store) =>
    store.venues.venues.find((venue) => venue.id === eventId)
  );

  if (!event) {
    return (
      <div className="flex flex-col items-center h-full md:h-[560px] pb-10">
        <img src="/no_results.svg" alt="no results page" className="md:h-96" />
        <h3 className="font-semibold text-xl">No results found</h3>
        <h3 className="text-sm font-light pt-2 text-gray-500">
          No results found. Please try again
        </h3>
      </div>
    );
  }

  const { events } = event;

  return (
    <div className="align-element space-y-7">
      <PageNav
        eventCenter={events.state}
        venueType={events.venue}
        venueName={events.title}
        page="Venue"
      />
      <EventOverview events={events} />
      <div className="md:grid md:grid-cols-3 gap-5">
        <EventImage events={events} />
        <EventBooking />
      </div>
      <TabSwitcher
        widen={true}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={["About", "Amenities", "Reviews", "Gallery"]}
      />

      {activeTab === "About" && <About events={events} />}
      {activeTab === "Amenities" && <Amenities events={events} />}
      {activeTab === "Reviews" && <Reviews events={events} />}
      {activeTab === "Gallery" && <EventGallery events={events} />}
    </div>
  );
};

export default Events;
