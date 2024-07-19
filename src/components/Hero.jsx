import { TbBuildingSkyscraper, TbUser } from "react-icons/tb";

const Hero = ({ link, title, subText, firstInput, secondInput }) => {
  return (
    <div
      className="bg-cover bg-no-repeat align-element flex flex-col lg:flex-row justify-center py-10 md:py-16 md:animate-fade-down"
      style={{ backgroundImage: `url(${link})` }}
    >
      <article className="text-center lg:mx-36">
        <h1 className="text-base-100 font-bold text-5xl">{title}</h1>
        <p className="my-7 text-xl md:text-2xl text-yellow-500">{subText}</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <label className="input input-bordered flex justify-between items-center gap-2 w-full">
            <input
              type="text"
              placeholder={firstInput}
              className="rounded-md h-10"
            />
            <TbBuildingSkyscraper color="gray" />
          </label>
          <label className="input input-bordered flex justify-between items-center gap-2 w-full">
            <input
              type="text"
              placeholder={secondInput}
              className="rounded-md h-10"
            />
            <TbUser color="gray" />
          </label>
          <button type="submit" className="bg-yellow-500 button-style">
            Search
          </button>
        </div>
      </article>
    </div>
  );
};

export default Hero;
