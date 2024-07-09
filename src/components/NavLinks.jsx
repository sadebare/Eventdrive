import { useRef, useState } from "react";
import LinkItems from "./LinkItems";

const links = [
  { 
    id: 1,
    page: 'Home'
  },
  { 
    id: 2, 
    page: 'Venues',
    details: {
      titles: ['By Location', 'By Venue Type', 'By Event'],
      states: [
        'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
        'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT - Abuja',
        'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
        'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers',
        'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
      ],
      venues: ['Hotels', 'Restaurants', 'Conference Halls'],
      events: ['Wedding Venues', 'Wedding Reception', 'Birthday Venues', 'Corporate Events Venues']
    }
  },
  { 
    id: 3, 
    page: 'Vendors',
    details: {
      titles: ['By Sound', 'By Hospitality', 'By Event Coverage', 'By Makeup'],
      sounds: ['Equipment Rentals', 'Mixology', 'DJ'],
      hospitalities: ['Small Event Catering', 'Large Event Catering', 'Decoration'],
      coverages: ['MC', 'Photography', 'Cinematography'],
      makeups: ['Bridal Makeup', 'Full Body Makeup', 'Hair Styling']
    }
  },
  { 
    id: 4, 
    page: 'How it Works'
  },
  { 
    id: 5, 
    page: 'Blog'
  },
];

const NavLinks = () => {
  const [activeLinkId, setActiveLinkId] = useState(null);
  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    if (submenu) {
      const { left, right, top, bottom } = submenu.getBoundingClientRect();
      const { clientX, clientY } = event;

      if ((clientX < left + 1) || clientX > right - 1 || clientY < top + 1 || clientY > bottom - 1) {
        setActiveLinkId(null);
      }
    }
  };

  const handleClick = (id) => {
    if (id === 4) {
      setActiveLinkId(null);
      document.getElementById("how").scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      setActiveLinkId(activeLinkId === id ? null : id);
    }
  };

  return (
    <div className="md:block md:font-semibold dropdown dropdown-hover">
      <ul className="grid md:flex gap-7 bg-base-100 button-style">
        {links.map((link) => {
          const { id, page } = link;
          return (
            <li 
              key={id}
              onMouseEnter={() => setActiveLinkId(id)}
              onClick={() => handleClick(id)}
              className="cursor-pointer hover:text-primary"
            >
              {page}
            </li>
          )
        })}
      </ul>
      {activeLinkId && (
        <div
          className="fixed top-10"
          onMouseLeave={handleMouseLeave}
          ref={submenuContainer}
        >
          <LinkItems details={links.find(link => link.id === activeLinkId)?.details} />
        </div>
      )}
    </div>
  )
}

export default NavLinks;