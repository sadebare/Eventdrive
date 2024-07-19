import { useField } from "formik";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomSelect = ({ label, field, options }) => {
  const [meta, helpers] = useField(field.name);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    options.find((option) => option.value === meta.value)?.label || ""
  );
  const selectRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option.label);
    helpers.setValue(option.value);
    setOpen(false);
  };

  return (
    <div
      className="relative w-full"
      ref={selectRef}
      tabIndex={0}
      onBlur={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-md bg-gray-50 pl-2 py-1 my-1"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-gray-700">{selected || field.placeholder}</span>
        <div className="text-base-100 bg-gray-400 px-1 py-2 rounded-r-lg h-auto">
          <FaChevronDown className={`${open && 'transform rotate-180'}`} />
        </div>
      </button>
      {open && (
        <ul className="absolute mt-1 w-full rounded-md px-5 py-2 bg-base-100 ring-1 ring-gray-300 z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="cursor-pointer select-none p-2 hover:bg-gray-50 border-b last-of-type:border-none"
              onMouseDown={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect