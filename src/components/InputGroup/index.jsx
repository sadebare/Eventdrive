import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const InputGroup = ({ label }) => {
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

export const RadioGroup = ({ name, options }) => {
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

export const SelectGroup = ({ label, options }) => {
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
        <span className="text-gray-700 capitalize">{selected || label}</span>
        <div className="text-base-100 bg-gray-400 px-1 py-3 -mr-1 rounded-r-lg h-full">
          <FaChevronDown className={`${open && "transform rotate-180"}`} />
        </div>
      </button>
      {open && (
        <ul className="absolute capitalize mt-1 w-full rounded-md px-5 py-2 bg-base-100 ring-1 ring-gray-300 z-10 h-52 overflow-y-auto">
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