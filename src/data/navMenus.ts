import { INavItem } from "@/types";
import {
  faHome,
  faUser,
  faBriefcase,
  faTimeline,
  faAward,
  faLaptopCode,
  faEnvelope,
  faCreditCard,
  faR,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  {
    name: "Home",
    link: "/#hero",
    icon: faHome,
  },

  {
    name: "Services",
    link: "/#services",
    icon: faBriefcase,
  },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: faTimeline,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faAward,
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: faLaptopCode,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelope,
  },
  {
    name: "Resume",
    link: "/resume/nikith_resume.pdf",
    icon: faReceipt,
    download: true,
  },
];
