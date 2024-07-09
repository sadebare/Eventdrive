const DescItem = ({ title, icon, sub, cont, name, role, remark }) => {
  return (
    <div
      className={`${
        cont ? "bg-gray-100 rounded-3xl gap-4 mb-10" : ""
      } grid p-3 h-80 mx-3`}
    >
      <img
        src={icon}
        className={`${
          cont ? 'w-full bg-gray-50 rounded-md"' : "mx-auto w-16 h-w-16"
        }`}
      />
      <div
        className={`${
          cont ? "grid text-xl gap-3" : "flex flex-col gap-3 text-3xl -mt-28"
        } text-center`}
      >
        {name && (
          <div className="bg-primary w-fit mx-auto px-5 py-3 font-bold rounded-full mt-10">
            {name && name[0]}
          </div>
        )}
        <div className={`${name && 'text-2xl'} font-semibold`}>{title || name}</div>
        {role && (
          <div className="mx-auto font-semibold text-xl text-primary">
            {role}
          </div>
        )}
        <div className={`${cont ? "text-primary" : "text-sm mx-10"}`}>
          {sub || remark}
        </div>
      </div>
    </div>
  );
};

export default DescItem;
