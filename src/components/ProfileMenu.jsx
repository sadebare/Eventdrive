import { FaCalendar, FaFirstOrder, FaHeart, FaUser } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";

const menus = [
  {
    id: 1,
    icon: <FaUser />,
    title: "My Profile",
  },
  {
    id: 2,
    icon: <FaFirstOrder />,
    title: "Order",
  },
  {
    id: 3,
    icon: <FaHeart />,
    title: "Wish List",
  },
  {
    id: 4,
    icon: <TbMessage />,
    title: "Chat",
  },
  {
    id: 5,
    icon: <FaCalendar />,
    title: "Monitor Booked Date",
  },
];

const ProfileMenu = () => {
  return (
    <>
      {menus.map((menu) => {
        const { id, icon, title } = menu;
        return (
          <ul className="flex gap-3">
            <li key={id}>
              <div>{icon}</div>
              <div className="text-primary-500">{title}</div>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default ProfileMenu;
