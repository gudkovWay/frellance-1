import { FaBiohazard, FaServicestack } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { MdOutlineReviews } from "react-icons/md";

export const appLinks = [
  {
    id: 0,
    href: "",
    title: "Главная",
    icon: <FaBiohazard />,
  },
  {
    id: 1,
    href: "#faq",
    title: "Быстрая помощь",
    icon: <FaServicestack />,
  },
  {
    id: 2,
    href: "#reviews",
    title: "Отзывы",
    icon: <MdOutlineReviews />,
  },
  {
    id: 3,
    href: "#contacts",
    title: "Контакты",
    icon: <GrContact />,
  },
];
