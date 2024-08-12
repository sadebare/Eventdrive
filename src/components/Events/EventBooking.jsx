import { parse, format } from "date-fns";
import { FaCalendarAlt, FaPhone } from "react-icons/fa";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import Calendar from "../Calendar";
import { SelectGroup } from "../InputGroup";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const EventBooking = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  const states = useSelector(
    (store) =>
      store.user.links.find((link) => link.page === "Venues").details.states
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  const bookedDays = [
    parse("2024-07-10", "yyyy-MM-dd", new Date()),
    parse("2024-07-15", "yyyy-MM-dd", new Date()),
    parse("2024-07-20", "yyyy-MM-dd", new Date()),
  ];

  return (
    <div>
      <div className="text-yellow-500 pb-1 border-b">
        Check Venue Availability
      </div>
      <div className="grid gap-2 py-7">
        <SelectGroup
          label="State"
          options={states.map((state) => ({
            value: state.toUpperCase().replace(" ", "_"),
            label: state,
          }))}
        />
        <div>
          <div
            className="cursor-pointer flex justify-between px-2 items-center mt-4 h-10 bg-gray-50 rounded-lg"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <div>
              {selectedDates.length > 0
                ? selectedDates
                    .map((date) => format(date, "yyyy-MM-dd"))
                    .join(", ")
                : "Enter Event Date"}
            </div>
            <FaCalendarAlt className="text-yellow-500" />
          </div>
          {showCalendar && (
            <div ref={calendarRef} className="mt-4">
              <Calendar
                bookedDays={bookedDays}
                setSelectedDates={(dates) => {
                  setSelectedDates(dates);
                  setShowCalendar(false);
                }}
              />
            </div>
          )}
        </div>
        <div className="border-b py-5">
          <button className="button-style bg-yellow-500 w-full">
            Make Reservation
          </button>
          <div className="text-xs text-right py-1">
            By clicking the button, you are accepting the{" "}
            <span className="text-yellow-500">Terms & Conditions</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 font-semibold">
            <FaPhone className="rotate-90 text-yellow-500" />
            +234 567 8901 234
          </div>
          <div className="flex items-center gap-2 font-light">
            <BiSolidMessageRoundedDetail className="text-yellow-500 text-xl" />
            <span className="text-gray-500">Chat with the venue manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBooking;
