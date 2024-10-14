"use client";

import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const widgetMenus: WidgetFooterMenu[] = [
    {
      id: "5",
      title: "Links",
      menus: [
        { href: "#", label: t("menu.home") },
        { href: "#service", label: t("menu.services") },
        { href: "#about", label: t("menu.aboutus") },
        { href: "/contact", label: t("menu.contact") },
      ],
    },
    {
      id: "1",
      title: t("menu.contact"),
      menus: [
        {
          href: "#",
          label: "Angle Av Echouhada et Av El Kadissia, Marrakech 40000, Maroc",
        },
        { href: "#", label: "reservations@lesalamamarrakech.com" },
        { href: "#", label: "+212 675-480018" },
      ],
    },
  ];
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm md:text-left text-center">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return isClient ? (
    <>
      <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container flex flex-col md:flex-row justify-between items-center md:items-start gap-5">
          <div className=" gap-5 flex flex-col">
            <div className="col-span-2 md:col-span-1">
              <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
                Social Media
              </h2>
            </div>
            <div className="col-span-2 flex items-center md:col-span-3">
              <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
            </div>
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Footer;
