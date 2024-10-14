"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { useThemeMode } from "@/utils/useThemeMode";

export type SiteHeaders = "Header 1" | "Header 2" | "Header 3";

/*interface HomePageItem {
  name: string;
  slug: PathName;
}*/

let OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const SiteHeader = () => {
  const anchorRef = useRef<HTMLDivElement>(null);

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  useEffect(() => {
    setIsTopOfPage(window.pageYOffset < 5);
  }, []);
  //
  useThemeMode();
  //

  const renderHeader = () => {
    let headerClassName = "shadow-sm dark:border-b dark:border-neutral-700";
    return <Header className={headerClassName} navType="MainNav1" />;
  };

  return client ? (
    <>
      {renderHeader()}
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
    </>
  ) : (
    <></>
  );
};

export default SiteHeader;
