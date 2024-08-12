const DescItem = ({ title, icon, sub, subText, cont, name, role, remark }) => {
  return (
    <div
      className={`${
        cont ? "shadow-lg border-gray-50 w-full rounded-3xl gap-1 mb-10" : "-mt-12 mb-5 md:mt-0"
      } grid p-3 h-80 md:h-full mx-3`}
    >
      <div className={`${sub && 'md:h-56'}`}>
        <img
          src={icon}
          className={`${
            cont ? 'w-full bg-gray-50 rounded-3xl' : "mx-auto w-16 h-16"
          } ${remark && 'w-fit'}`}
        />
      </div>
      <div
        className={`${
          cont ? "grid md:text-xl gap-3" : "flex flex-col gap-3 text-xl md:text-3xl my-10 mb-20"
        } ${remark && '-my-2'} text-center`}
      >
        {name && (
          <div className="bg-yellow-500 w-fit mx-auto px-5 py-3 font-bold rounded-full mt-14">
            {name && name[0]}
          </div>
        )}
        <div className={`${name && 'text-xl md:text-2xl'} font-semibold ${sub && 'text-black mt-2 md:mt-4'}`}>{title || name}</div>
        {role && (
          <div className="mx-auto font-semibold text-lg md:text-xl text-yellow-500">
            {role}
          </div>
        )}
        <div className={`${cont ? "text-yellow-500" : "text-sm leading-6 md:leading-5 mx-10"}`}>
          {sub || subText || remark}
        </div>
      </div>
    </div>
  );
};

export default DescItem;
