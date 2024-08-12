import { useState } from "react";
import Modal from "../Modal";
import Similar from "../Venue/Similar";

const EventGallery = () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="pb-10">
      <div className="space-y-5">
        <div className="space-y-5">
          <div className="bg-base-200 p-2 font-semibold rounded-md text-lg">
            Venue Gallery
          </div>
        </div>
        <div className="grid md:flex gap-5">
          <img src="/venue.svg" alt="venues" className="w-full" />
          <img src="/venue.svg" alt="venues" className="w-full" />
          <img src="/venue.svg" alt="venues" className="w-full" />
          <img src="/venue.svg" alt="venues" className="w-full" />
        </div>
        <div className="flex justify-center items-center">
          <div
            onClick={() => setViewMore(true)}
            className="w-fit border rounded-md button-style hover:bg-gray-300"
          >
            View More Photos
          </div>
        </div>
      </div>

      {viewMore && (
        <Modal onClose={() => setViewMore(false)}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <img src="/venue.svg" alt="venues" className="w-full" />
            <img src="/venue.svg" alt="venues" className="w-full" />
            <img src="/venue.svg" alt="venues" className="w-full" />
            <img src="/venue.svg" alt="venues" className="w-full" />
            <img src="/venue.svg" alt="venues" className="w-full" />
            <img src="/venue.svg" alt="venues" className="w-full" />
          </div>
          <div className="flex justify-end pt-7">
            <div onClick={() => setViewMore(false)} className="button-style bg-yellow-500 w-fit">Close</div>
          </div>
        </Modal>
      )}

      <div>
        <Similar text="Similar Venues" />
      </div>
    </div>
  );
};

export default EventGallery;
