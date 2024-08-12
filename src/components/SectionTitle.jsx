const SectionTitle = ({ text, view }) => {
  return (
    <h2 className={`${view ? 'hidden' : 'mx-auto text-center text-xl leading-relaxed md:text-3xl md:mx-0 font-bold my-6'}`}>
      <span className="border-l-[15px] border-yellow-500 pl-3">{text}</span>
    </h2>
  )
}

export default SectionTitle