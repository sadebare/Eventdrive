import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Calendar = ({ bookedDays, setSelectedDates }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState([]);

  const onDateClick = (day) => {
    if (selectedDays.find(selectedDay => isSameDay(selectedDay, day))) {
      setSelectedDays(selectedDays.filter(selectedDay => !isSameDay(selectedDay, day)));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleDoneClick = () => {
    setSelectedDates(selectedDays);
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">{format(currentMonth, dateFormat)}</div>
        <div>
          <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-2 border bg-gray-400 text-base-100 rounded-full mr-2"><FaChevronLeft size={10} /></button>
          <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-2 border bg-gray-400 text-base-100 rounded-full"><FaChevronRight size={10} /></button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(new Date());

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center text-xs font-bold mt-5" key={i}>
          {format(addDays(startDate, i), "EEEEEE")}
        </div>
      );
    }

    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`p-2 text-center border border-gray-100 cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? "text-gray-400 cursor-not-allowed"
                : bookedDays.some(bookedDay => isSameDay(bookedDay, day))
                ? "bg-red-500 text-base-100 font-semibold cursor-not-allowed"
                : selectedDays.some(selectedDay => isSameDay(selectedDay, day))
                ? "bg-yellow-500 text-base-100 font-semibold cursor-pointer"
                : ""
            }`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className='text-xs'>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="absolute z-10 bg-base-100 p-5 md:p-8 md:max-w-lg mx-auto rounded-3xl shadow-md mt-2">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <div className='flex justify-between pt-7'>
        <div className='text-xs md:pr-7 w-56 md:w-64'>The days marked as <span className='italic font-semibold text-red-500'>red</span> are already booked</div>
        <div className='button-style bg-yellow-500 cursor-pointer' onClick={handleDoneClick}>Done</div>
      </div>
    </div>
  );
};

export default Calendar;
