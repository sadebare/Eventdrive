import { Link } from "react-router-dom";

const VenueCall = () => {
  return (
    <div className="align-element bg-cover bg-no-repeat bg-[url('/venue_call.jpg')] grid gap-5 py-16 place-items-center">
      <Link
        to="/vendor-register"
        className="px-4 py-2 rounded-xl font-semibold bg-black hover:animate-wiggle text-2xl text-base-100 w-fit"
      >
        List Your Business
      </Link>
      <div className="text-center mx-10 md:mx-96 font-semibold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat commodi velit molestiae reiciendis eligendi ipsum, 
        accusamus dolore dolorum ratione odit magnam iure voluptatem natus quasi id consectetur ullam impedit nulla?
      </div>
    </div>
  );
};

export default VenueCall;
