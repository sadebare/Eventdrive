import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import logo from "/logo.svg";
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
    <div className="bg-base-100 py-6">
      {/* Desktop */}
      <div className="align-element hidden lg:block">
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
                    className="bg-primary rounded-full p-3"
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
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="bg-primary md:px-3 py-1 rounded-md cursor-pointer"
                >
                  Sign Up
                </Link>
                <Link to="/login" className="shadow px-3 py-1 cursor-pointer">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="align-element lg:hidden">
        <div className="flex justify-between">
          <LogoHeader />
          <div className="flex gap-5 items-center">
            {user && (
              <img
                src="/avatar.svg"
                alt="user"
                className="bg-primary rounded-full p-3"
              />
            )}
            <span className="text-primary" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={30} /> : <VscThreeBars size={30} />}
            </span>
          </div>
          {isOpen && (
            <div className="fixed top-20 left-0 w-full h-fit space-y-3 align-element rounded-b-md py-10 bg-white overflow-hidden">
              <div className="pl-4">
                {/* user name here */}
                <div>{""}</div>
                {user && (
                  <div className="flex items-center gap-5 pb-8">
                    <div>
                      <img
                        src="/avatar.svg"
                        alt="user"
                        className="bg-primary rounded-full p-3"
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
                    className="bg-primary w-1/3 py-3 text-center button-style"
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
