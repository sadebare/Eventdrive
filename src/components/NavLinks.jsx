import { useState } from "react";
import LinkItems from "./LinkItems";
import { useSelector } from "react-redux";

const NavLinks = () => {
  const [activeLinkId, setActiveLinkId] = useState(null);
  const links = useSelector((store) => store.user.links);

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
      {activeLinkId && activeLinkId !== 4 && (
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
