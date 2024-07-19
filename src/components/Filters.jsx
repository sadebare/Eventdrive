import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FilterBy = ({ text }) => (
  <h4 className="text-lg leading-relaxed md:text-xl font-bold mb-4">
    <span className="border-l-[10px] border-yellow-500 pl-3">{text}</span>
  </h4>
);

const InputGroup = ({ label }) => {
  return (
    <div>
      <input
        type="text"
        className="w-full h-10 rounded-md outline-none pl-2 bg-gray-50"
        placeholder={`${label}`}
      />
    </div>
  );
};

const RadioGroup = ({ name, options }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="space-y-2">
      {options.map((option) => {
        const checked = option.value === selectedValue;
        return (
          <label key={option.value} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              className="hidden"
              checked={checked}
              onChange={() => handleChange(option.value)}
            />
            <div
              className={`w-4 h-4 mr-2 flex items-center justify-center border rounded-full ${
                checked ? "bg-white border-yellow-500" : ""
              }`}
            >
              {checked && (
                <div className="w-[7px] h-[7px] bg-yellow-500 rounded-full" />
              )}
            </div>
            <span className="ml-2">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};

const SelectGroup = ({ label, options }) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option.label);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-md bg-gray-50 px-2 my-1 h-10"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-gray-700">{selected || label}</span>
        <div className="text-base-100 bg-gray-400 px-1 py-3 -mr-1 rounded-r-lg h-full">
          <FaChevronDown className={`${open && "transform rotate-180"}`} />
        </div>
      </button>
      {open && (
        <ul className="absolute mt-1 w-full rounded-md px-5 py-2 bg-base-100 ring-1 ring-gray-300 z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="cursor-pointer select-none p-2 hover:bg-gray-50 border-b last-of-type:border-none"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Filters = () => {
  const states = ["State 1", "State 2", "State 3"];
  const venueTypes = [
    { value: "conference", label: "Conference Room" },
    { value: "banquet", label: "Banquet Hall" },
    { value: "hotel", label: "Hotel" },
  ];
  const eventTypes = [
    { value: "wedding", label: "Wedding" },
    { value: "birthday", label: "Birthday" },
    { value: "corporate", label: "Corporate Event" },
  ];
  const capacities = [
    { value: "less_than_100", label: "Less than 100 Guests" },
    { value: "101_to_200", label: "101 to 200 Guests" },
    { value: "201_to_300", label: "201 to 300 Guests" },
  ];
  const budgets = [
    { value: "less_than_5000", label: "Less than #5,000" },
    { value: "5001_to_20000", label: "#5,001 to #20,000" },
    { value: "20001_to_50000", label: "#20,001 to #50,000" },
  ];
  const ratings = [
    { value: "no_rating", label: "No rating yet" },
    { value: "1_to_2", label: "1 to 2 ratings" },
    { value: "3_to_4", label: "3 to 4 ratings" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Filter Your Venue</h2>
      <div className="space-y-10">
        {/* Filter by VENUE */}
        <div className="space-y-2">
          <FilterBy text="Venue Type" />
          <InputGroup label="Venue Type" />
          <RadioGroup name="venueType" options={venueTypes} />
        </div>

        {/* Filter by STATE */}
        <div>
          <FilterBy text="By State" />
          <SelectGroup
            label="State"
            options={states.map((state) => ({
              value: state.toLowerCase().replace(" ", "_"),
              label: state,
            }))}
          />
        </div>

        {/* Filter by LOCATION */}
        <div>
          <FilterBy text="By Location" />
          <InputGroup label="Location" />
        </div>

        {/* Filter by EVENT */}
        <div className="space-y-2">
          <FilterBy text="By Event" />
          <InputGroup label="Event" />
          <RadioGroup name="eventType" options={eventTypes} />
        </div>

        {/* Filter by CAPACITY */}
        <div>
          <FilterBy text="By Capacity" />
          <RadioGroup name="capacity" options={capacities} />
        </div>

        {/* Filter by BUDGET */}
        <div>
          <FilterBy text="By Budget" />
          <RadioGroup name="budget" options={budgets} />
        </div>

        {/* Filter by RATINGS */}
        <div>
          <FilterBy text="By Ratings" />
          <RadioGroup name="ratings" options={ratings} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
