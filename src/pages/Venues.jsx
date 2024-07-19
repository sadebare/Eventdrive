import { FaFilter } from "react-icons/fa";
import {
  Categories,
  Filters,
  Hero,
  PageNav,
  Popular,
  VenueCall,
  VenueList,
} from "../components";
import { useState } from "react";

const Venues = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <main>
      <Hero
        title="Find Your Perfect Venue"
        subText="This is where the short copy explaining venue search goes."
        firstInput="Venue type"
        secondInput="Location"
        link="venue_hero.jpg"
      />
      <div className="align-element space-y-7">
        <PageNav />
        <Categories />
        <div
          className={`fixed inset-0 z-40 ${isDrawerOpen ? "block" : "hidden"}`}
        >
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleDrawer}
          ></div>
          <div
            className={`absolute bottom-0 w-full h-1/2 bg-white p-6 rounded-t-lg transform transition-transform duration-10000 ease-in-out ${
              isDrawerOpen ? "slide-up" : "slide-down"
            } overflow-y-auto overflow-visible`}
          >
            <Filters />
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="border rounded-md flex items-center gap-5 w-fit text-lg px-4 py-2"
          >
            <FaFilter className="text-yellow-500" />
            <span className="font-semibold">Filters</span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block">
            <Filters />
          </div>
          <div className="md:flex-1">
            <VenueList />
            <VenueList />
            <VenueList />
            <VenueList />
            <VenueList />
          </div>
        </div>
      </div>
      <Popular />
      <VenueCall />
    </main>
  );
};

export default Venues;
