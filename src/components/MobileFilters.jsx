import { useState } from "react";
import Filters from "./Filters";
import { FaFilter } from "react-icons/fa";

const MobileFilters = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  
  return (
    <>
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
    </>
  );
};

export default MobileFilters;
