const Logos = ({ logo, title }) => {
  return (
    <div className="flex flex-col items-center gap-2 mr-5">
      <img src={logo} alt="logo" className="w-16 md:w-20 mx-auto md:ml-14" />
      <div className="text-sm md:text-lg">{title}</div>
    </div>
  )
}

export default Logos