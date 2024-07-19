import { useRef, useState } from "react";
import LinkItems from "./LinkItems";

const links = [
  {
    id: 1,
    page: "Home",
  },
  {
    id: 2,
    page: "Venues",
    details: {
      titles: ["By Location", "By Venue Type", "By Event"],
      states: [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara",
      ],
      venues: ["Hotels", "Restaurants", "Conference Halls", "Bar"],
      events: [
        "Wedding Venues",
        "Wedding Reception",
        "Birthday Venues",
        "Corporate Events Venues",
      ],
    },
  },
  {
    id: 3,
    page: "Vendors",
    details: {
      titles: ["By Sound", "By Hospitality", "By Event Coverage", "By Makeup"],
      sounds: ["Equipment Rentals", "Mixology", "DJ"],
      hospitalities: [
        "Small Event Catering",
        "Large Event Catering",
        "Decoration",
      ],
      coverages: ["MC", "Photography", "Cinematography"],
      makeups: ["Bridal Makeup", "Full Body Makeup", "Hair Styling"],
    },
  },
  {
    id: 4,
    page: "How it Works",
  },
  {
    id: 5,
    page: "Blog",
  },
];

const NavLinks = () => {
  const [activeLinkId, setActiveLinkId] = useState(null);

  const handleClick = (id) => {
    if (id === 4) {
      setActiveLinkId(null);
      document
        .getElementById("how")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setActiveLinkId(activeLinkId === id ? null : id);
    }
  };

  const handleHover = (id) => {
    setActiveLinkId(activeLinkId === id ? null : id);
  };

  return (
    <div className="md:grid md:font-medium">
      <ul className="grid md:flex gap-7 bg-base-100 button-style">
        {links.map((link) => {
          const { id, page } = link;
          return (
            <li
              key={id}
              onMouseEnter={() => handleHover(id)}
              onClick={() => handleClick(id)}
              className="cursor-pointer hover:text-yellow-500"
            >
              {page}
            </li>
          );
        })}
      </ul>
      {activeLinkId < 4 && (
        <div className="hidden md:block absolute top-36 mt-2 z-10">
          <LinkItems
            details={links.find((link) => link.id === activeLinkId)?.details}
          />
        </div>
      )}
    </div>
  );
};

export default NavLinks;
