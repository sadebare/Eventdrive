import { FaStar } from "react-icons/fa";
import FourthSection from "./Landing/FourthSection";
import { useState } from "react";
import Modal from "./Modal";

const Reviews = ({ events, vendors }) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="pb-10">
      <div className="space-y-5">
        <div className="space-y-5">
          <div className="bg-base-200 p-2 font-semibold rounded-md text-lg">
            Reviews & Ratings
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-7">
          <div className="flex flex-col items-center gap-5 bg-yellow-100 py-8 rounded-xl">
            <div className="flex items-center gap-3 text-5xl">
              <FaStar color="gold" />
              {events ? (
                <span className="font-bold text-4xl">
                  {events.rating}
                </span>
              ) : (
                <span className="font-bold text-4xl">
                  {vendors.rating}
                </span>
              )}
            </div>
            {events ? (
              <div className="text-2xl font-light">
                ({events.review} Reviews)
              </div>
            ) : (
              <div className="text-2xl font-light">
                ({vendors.review} Reviews)
              </div>
            )}
          </div>

          <div className="content-center">
            <div>
              <div className="flex justify-between">
                <span>Ambience</span>
                <span className="text-yellow-500">4.4</span>
              </div>
              <progress
                className="progress progress-primary w-full"
                value={4.4}
                max="5.0"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between">
                <span>Clean</span>
                <span className="text-yellow-500">4.6</span>
              </div>
              <progress
                className="progress progress-primary w-full"
                value={4.6}
                max="5.0"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between">
                <span>Service</span>
                <span className="text-yellow-500">3.5</span>
              </div>
              <progress
                className="progress progress-primary w-full"
                value={3.5}
                max="5.0"
              ></progress>
            </div>
          </div>

          <div>
            <img src="/signed.svg" alt="eventdrive sign" className="w-full" />
          </div>
        </div>
        <div className="md:flex">
          <FourthSection view={true} />
        </div>

        <div className="flex justify-center items-center">
          <div
            onClick={() => setViewMore(true)}
            className="w-fit border rounded-md button-style hover:bg-gray-300"
          >
            Write a Review
          </div>
        </div>
      </div>

      {viewMore && (
        <Modal onClose={() => setViewMore(false)}>
          <textarea
            className="outline-none w-full h-72 bg-gray-50 px-5 py-2 rounded-md"
            placeholder="Write a review"
          />
          <div className="flex justify-end pt-3">
            <div
              onClick={() => setViewMore(false)}
              className="button-style bg-yellow-500 w-fit"
            >
              Submit
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Reviews;
