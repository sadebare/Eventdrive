import React, { useState } from 'react';
import { Field, ErrorMessage } from 'formik';

const FormFields = ({ fields }) => {
  const [showPassword, setShowPassword] = useState({});

  const handleTogglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <>
      {fields.map(({ name, label, type, placeholder }) => (
        <div className="grid gap-2" key={name}>
          <label htmlFor={name} className="font-semibold">
            {label}
          </label>
          <div className="relative">
            <Field
              type={type === 'password' ? (showPassword[name] ? 'text' : 'password') : type}
              id={name}
              name={name}
              placeholder={placeholder}
              className="bg-gray-50 h-10 pl-2 rounded-md outline-none w-full"
            />
            {type === 'password' && (
              <button
                type="button"
                onClick={() => handleTogglePassword(name)}
                title='show password'
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg
                  className={`w-5 h-5 ${showPassword[name] ? 'text-gray-700' : 'text-gray-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={showPassword[name] ? 'M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zM12 12l-3 3m3-3l3 3' : 'M1 12s3-7 11-7 11 7 11 7-3 7-11 7-11-7-11-7z'} />
                </svg>
              </button>
            )}
          </div>
          <ErrorMessage name={name} component="p" className="text-red-500 text-sm" />
        </div>
      ))}
    </>
  );
};

export default FormFields;
