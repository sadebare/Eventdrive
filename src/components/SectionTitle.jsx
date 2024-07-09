const SectionTitle = ({ text }) => {
  return (
    <h2 className="mx-auto text-center text-2xl leading-relaxed md:text-3xl md:mx-0 font-bold my-6">
      <span className="border-l-[15px] border-primary pl-3">{text}</span>
    </h2>
  )
}

export default SectionTitle