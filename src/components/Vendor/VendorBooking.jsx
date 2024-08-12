import { parse, format } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "../Calendar";
import { useEffect, useRef, useState } from "react";

const VendorBooking = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

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
    <div className="grid gap-x-5 md:grid-cols-3">
      <div></div>
      <div>
        <div
          className="cursor-pointer flex justify-between px-2 items-center h-10 mt-5 bg-gray-50 rounded-lg"
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
          <div ref={calendarRef}>
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
      <div className="py-5">
        <button className="button-style bg-yellow-500 w-full">
          Make Reservation
        </button>
        <div className="text-xs text-right py-1">
          By clicking the button, you are accepting the{" "}
          <span className="text-yellow-500">Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default VendorBooking;
