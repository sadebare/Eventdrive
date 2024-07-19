import { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import CustomRadio from "./CustomRadio";
import CustomSelect from "./CustomSelect";

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
      {fields.map(({ name, label, type, placeholder, options, subFields }) => (
        <div className="grid gap-2" key={name}>
          {type === "address" && subFields ? (
            <>
              <label className="font-semibold">{label}</label>
              <div className="grid md:grid-cols-2 gap-2">
                {subFields.slice(0, 2).map((subField) => (
                  <div key={subField.name}>
                    <Field
                      as={CustomSelect}
                      field={{
                        name: subField.name,
                        placeholder: subField.placeholder,
                      }}
                      options={subField.options}
                    />
                    <ErrorMessage
                      name={subField.name}
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-2 mt-2">
                {subFields.slice(2, 5).map((subField) => (
                  <div key={subField.name}>
                    {subField.type === "text" ? (
                      <Field
                        type="text"
                        name={subField.name}
                        placeholder={subField.placeholder}
                        className="bg-gray-50 h-10 pl-2 rounded-md outline-none w-full"
                      />
                    ) : (
                      <Field
                        as={CustomSelect}
                        field={{
                          name: subField.name,
                          placeholder: subField.placeholder,
                        }}
                        options={subField.options}
                      />
                    )}
                    <ErrorMessage
                      name={subField.name}
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2">
                <Field
                  type="text"
                  name={subFields[5].name}
                  placeholder={subFields[5].placeholder}
                  className="bg-gray-50 h-10 pl-2 rounded-md outline-none w-full"
                />
                <ErrorMessage
                  name={subFields[5].name}
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
            </>
          ) : (
            <>
              <label htmlFor={name} className="font-semibold">
                {label}
              </label>
              {type === "radio" ? (
                <div className="flex flex-col space-y-2">
                  {options.map((option) => (
                    <CustomRadio
                      key={option.value}
                      field={{ name }}
                      option={option}
                    />
                  ))}
                </div>
              ) : type === "select" ? (
                <Field
                  as={CustomSelect}
                  field={{ name, placeholder }}
                  options={options}
                />
              ) : (
                <div className="relative">
                  <Field
                    type={
                      type === "password"
                        ? showPassword[name]
                          ? "text"
                          : "password"
                        : type
                    }
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className="bg-gray-50 h-10 pl-2 rounded-md outline-none w-full"
                  />
                  {type === "password" && (
                    <button
                      type="button"
                      onClick={() => handleTogglePassword(name)}
                      title="show password"
                      className="absolute inset-y-0 right-0 text-gray-400 flex items-center pr-3"
                    >
                      {showPassword[name] ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                  )}
                </div>
              )}
              <ErrorMessage
                name={name}
                component="p"
                className="text-red-500 text-sm"
              />
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default FormFields;
