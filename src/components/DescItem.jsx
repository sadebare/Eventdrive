const DescItem = ({ title, icon, sub, subText, cont, name, role, remark }) => {
  return (
    <div
      className={`${
        cont ? "shadow-lg border-gray-50 rounded-3xl gap-4 mb-10" : ""
      } grid p-3 h-80 md:h-96 mx-3`}
    >
      <div className={`${sub && 'md:h-56'}`}>
        <img
          src={icon}
          className={`${
            cont ? 'w-full bg-gray-50 rounded-3xl' : "mx-auto w-16 h-16"
          } ${remark && 'h-0 w-0'}`}
        />
      </div>
      <div
        className={`${
          cont ? "grid text-xl gap-3" : "flex flex-col gap-3 text-3xl -mt-28"
        } text-center`}
      >
        {name && (
          <div className="bg-yellow-500 w-fit mx-auto px-5 py-3 font-bold rounded-full mt-10">
            {name && name[0]}
          </div>
        )}
        <div className={`${name && 'text-2xl'} font-semibold`}>{title || name}</div>
        {role && (
          <div className="mx-auto font-semibold text-xl text-yellow-500">
            {role}
          </div>
        )}
        <div className={`${cont ? "text-yellow-500" : "text-sm mx-10"}`}>
          {sub || subText || remark}
        </div>
      </div>
    </div>
  );
};

export default DescItem;
