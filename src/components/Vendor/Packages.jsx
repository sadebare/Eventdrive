const Packages = ({ vendors }) => {
  return (
    <div className="space-y-5 pb-10">
      <div className="space-y-5">
        <div className="bg-base-200 p-2 font-semibold rounded-md text-lg">
          Packages
        </div>
      </div>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        {vendors.packages.map((pkg) => {
          const { id, plan, offers, price } = pkg;
          return (
            <div
              key={id}
              className="text-center md:border-r-2 md:last-of-type:border-none md:border-r-gray-400 px-2"
            >
              <div
                className={`${plan === "Basic" && "bg-yellow-200"} ${
                  plan === "Standard" && "bg-yellow-400"
                } ${
                  plan === "Premium" && "bg-yellow-600"
                } font-semibold flex justify-center items-center text-3xl py-2 md:rounded-l-md`}
              >
                {plan}
              </div>
              <ul className="list-disc mx-7 py-2">
                {offers.map((offer, index) => (
                  <li key={index} className="py-1 text-left">
                    {offer}
                  </li>
                ))}
              </ul>
              <div className="text-right text-5xl tracking-tight font-semibold md:mt-5 md:pr-5">NGN {price}</div>
            </div>
          );
        })}
      </div>
      <p className="italic text-gray-500 text-center text-sm"><span className="text-yellow-500">*</span>Note that the prices of these packages may change.</p>
    </div>
  );
};

export default Packages;
