import DescItem from "./DescItem";
import SectionTitle from "./SectionTitle";

const FourthSection = () => {
  const description = [
    {
      name: "Silvia Adeleke",
      role: "Head of Events | Event Drive",
      remark:
        "Morbi ut vulputate nulla, ac fermentum metus. Phasellus ut nunc imperdiet, gravida nisl non, hendrerit eros.",
    },
    {
      name: "Adam Uchemba",
      role: "Event Planner | 347 Events",
      remark:
        "Morbi ut vulputate nulla, ac fermentum metus. Phasellus ut nunc imperdiet, gravida nisl non, hendrerit eros.",
    },
    {
      name: "Gabriel Simeon",
      role: "Private Planner | Forhter",
      remark:
        "Morbi ut vulputate nulla, ac fermentum metus. Phasellus ut nunc imperdiet, gravida nisl non, hendrerit eros.",
    },
  ];

  return (
    <section className="align-element py-8">
      <SectionTitle text="What Event Planners are Saying" />
      <div className="grid md:grid-cols-3 h-full">
        {description.map((item, index) => (
          <div key={index}>
            <DescItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourthSection;
