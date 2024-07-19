import { Field, useField } from "formik";

const CustomRadio = ({ field, option }) => {
  const [meta] = useField(field.name);
  const checked = meta.value === option.value;

  return (
    <label className="flex items-center first-of-type:pt-2 cursor-pointer">
      <Field type="radio" {...field} value={option.value} className="hidden" />
      <div
        className={`w-4 h-4 mr-2 flex items-center justify-center border rounded-full ${
          checked && "bg-white border-yellow-500"
        }`}
      >
        {checked && (
          <div className="w-[7px] h-[7px] bg-yellow-500 rounded-full" />
        )}
      </div>
      <span>{option.label}</span>
    </label>
  );
};

export default CustomRadio