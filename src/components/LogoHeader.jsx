import logo from "/logo.svg";

const LogoHeader = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <img width={75} src={logo} alt="logo" />
      <div className="text-center text-sm md:text-xl">
        <div className="font-bold tracking-wider">EVENT DRIVE</div>
        <div className="tracking-[3px] text-[10px]">NIGERIA</div>
      </div>
    </div>
  );
};

export default LogoHeader;
