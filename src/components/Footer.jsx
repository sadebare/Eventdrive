import { TbCopyright } from "react-icons/tb"
import logo from '/logo.svg';
import facebook from '/facebook.svg';
import x from '/x.svg';
import instagram from '/instagram.svg';

const Footer = () => {
  return (
    <div className="bg-gray-50 md:bg-black">
      <div className="align-element flex flex-col md:grid md:grid-cols-7 gap-5 text-black md:text-white p-10">
        <div className="flex flex-col items-center md:items-start gap-3 col-span-2">
          <div className="font-bold text-3xl flex gap-3">
            <img src={logo} alt="logo" />
            <div className="text-center text-sm">
              <div className="font-semibold">EVENT DRIVE</div>
              <div className="tracking-[3px] text-[10px]">NIGERIA</div>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={facebook} alt="facebook link" className="cursor-pointer w-14 h-14" />
            <img src={x} alt="x link" className="cursor-pointer w-14 h-14" />
            <img src={instagram} alt="instagram link" className="cursor-pointer w-14 h-14" />
          </div>
          <div className="grid gap-1 text-center md:text-left">
            <div>Plot 6, Amadu Bello Way, Wuse, Zone 4, Abuja</div>
            <div>081123456789, 070123456789</div>
          </div>
        </div>

        <div className="flex gap-5 md:col-span-3">
          <div className="grid gap-1">
            <div className="text-yellow-500 font-medium text-lg">Company</div>
            <div>About Us</div>
            <div>Our Blog</div>
            <div>How It Works</div>
          </div>
          
          <div className="grid gap-1">
            <div className="text-yellow-500 font-medium text-lg">Help</div>
            <div>About Us</div>
            <div>Our Blog</div>
            <div>How It Works</div>
          </div>

          <div className="grid gap-1">
            <div className="text-yellow-500 font-medium text-lg">Transparency</div>
            <div>Privacy Policy</div>
            <div>Security Policy</div>
            <div>Complaints</div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-2">
          <div className="text-sm">Enter your email to get notified about new solutions</div>
          <label className="input input-bordered flex justify-between items-center gap-2 w-full">
            <input type="text" placeholder="Email" className="rounded-md h-10 w-full" />
            <button className="button-style bg-yellow-500 -mr-2 md:-mr-3">Subscribe</button>
          </label>
        </div>

        <hr className="col-span-7" />
        <div className="col-span-7 flex justify-center md:justify-end items-center gap-3">
          <TbCopyright /> Copyright 1986. All Rights Reserved.
        </div>
      </div>

    </div>
  )
}

export default Footer