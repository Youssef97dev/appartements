import React from "react";
import NavigationItem from "./NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t } = useTranslation();

  const NAVIGATION_DEMO: any[] = [
    {
      id: ncNanoId(),
      href: "/",
      name: t("menu.home"),
      type: "none",
    },
    {
      id: ncNanoId(),
      href: "/#service",
      name: t("menu.services"),
      type: "none",
    },
    {
      id: ncNanoId(),
      href: "/#about",
      name: t("menu.aboutus"),
      type: "none",
    },
    {
      id: ncNanoId(),
      href: "/contact",
      name: t("menu.contact"),
      type: "none",
    },
  ];

  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:space-x-1 relative">
      {NAVIGATION_DEMO.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
