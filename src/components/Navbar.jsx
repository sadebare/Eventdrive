import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { FaTimes } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoHeader from "./LogoHeader";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <div className="bg-base-100">
      {/* Desktop */}
      <div className="flex justify-center bg-gray-100 text-yellow-500">
        <Link to='/vendor-register' className="py-2 md:font-semibold hover:underline ">List Your Business</Link>
      </div>
      <div className="align-element py-6 hidden lg:block">
        <div className="flex items-center justify-between">
          <LogoHeader />
          <NavLinks />
          <div className="hidden md:flex font-semibold items-center gap-5">
            {!user ? (
              <>
                <div>{user}</div>
                <div>
                  <img
                    src="/avatar.svg"
                    alt="user"
                    className="bg-yellow-500 rounded-full p-3"
                  />
                </div>
                <div>
                  <img
                    src="/notification.svg"
                    alt="notification"
                    className="hover:bg-gray-200 border border-black rounded-full p-3"
                  />
                </div>
                <div>
                  <img
                    src="/cart.svg"
                    alt="cart"
                    className="hover:bg-gray-200 border border-black rounded-full p-3"
                  />
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="bg-yellow-500 hover:bg-yellow-600 md:px-3 py-1 rounded-md cursor-pointer"
                >
                  Sign Up
                </Link>
                <Link to="/login" className="hover:bg-base-200 rounded-md border px-3 py-1 cursor-pointer">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="align-element lg:hidden py-6">
        <div className="flex justify-between">
          <LogoHeader />
          <div className="flex gap-5 items-center">
            {user && (
              <img
                src="/avatar.svg"
                alt="user"
                className="bg-yellow-500 rounded-full p-3"
              />
            )}
            <span className="text-yellow-500" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={30} /> : <VscThreeBars size={30} />}
            </span>
          </div>
          {isOpen && (
            <div className="fixed top-28 left-0 w-full h-fit space-y-3 align-element rounded-b-md py-10 bg-white overflow-hidden">
              <div className="pl-4">
                {/* user name here */}
                <div>{""}</div>
                {!user && (
                  <div className="flex items-center gap-5 pb-8">
                    <div>
                      <img
                        src="/avatar.svg"
                        alt="user"
                        className="bg-yellow-500 rounded-full p-3"
                      />
                    </div>
                    <div>
                      <img
                        src="/notification.svg"
                        alt="notification"
                        className="border border-black rounded-full p-3"
                      />
                    </div>
                    <div>
                      <img
                        src="/cart.svg"
                        alt="cart"
                        className="border border-black rounded-full p-3"
                      />
                    </div>
                  </div>
                )}
              </div>
              <NavLinks />
              {!user && (
                <div className="grid gap-4 pl-3">
                  <Link
                    to="/register"
                    className="bg-yellow-500 w-1/3 py-3 text-center button-style"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="border w-1/3 py-3 text-center button-style"
                  >
                    Log in
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
