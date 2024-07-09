import DescItem from "./DescItem";
import SectionTitle from "./SectionTitle";

const ThirdSection = () => {
  const description = [
    {
      title: "Browse",
      icon: "/search.svg",
      sub:
        "Curabitur pharetra libero felis. Ut placerat tincidunt urna, vitae semper ligula tristique eget.",
    },
    {
      title: "Payment",
      icon: "/money.svg",
      sub:
        "Curabitur pharetra libero felis. Ut placerat tincidunt urna, vitae semper ligula tristique eget.",
    },
    {
      title: "Attend",
      icon: "calendar_briefcase.svg",
      sub:
        "Curabitur pharetra libero felis. Ut placerat tincidunt urna, vitae semper ligula tristique eget.",
    },
  ];

  return (
    <section id="how" className="align-element bg-[url('/how.svg')] bg-cover bg-no-repeat text-white grid gap-10 pt-4">
      <SectionTitle text="How It Works" />
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

export default ThirdSection;
