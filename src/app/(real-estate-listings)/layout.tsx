import BackgroundSection from "@/components/BackgroundSection";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import React, { ReactNode } from "react";
import SectionHero2ArchivePage from "../(server-components)/SectionHero2ArchivePage";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="nc-ListingRealEstateMapPage">
      <div className="container pb-24 lg:pb-28">
        <SectionHero2ArchivePage />
      </div>

      {children}

      <div className="container overflow-hidden"></div>
    </div>
  );
};

export default Layout;
