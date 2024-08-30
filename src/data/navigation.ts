import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";
import __megamenu from "./jsons/__megamenu.json";

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/#service",
    name: "Services",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/#about",
    name: "About us",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact",
    type: "none",
  },
];
