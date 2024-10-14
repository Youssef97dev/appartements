"use client";
import { useState, useEffect } from "react";
import rightImg from "@/images/about-hero-right.png";
import BackgroundSection from "@/components/BackgroundSection";

import SectionGridFeatureProperty from "./(home)/SectionGridFeatureProperty";
import SectionHero2 from "@/app/(server-components)/SectionHero2";
import SectionAbout from "@/components/SectionAbout";
import ServiceSection from "@/components/ServiceSection";
import SectionHero3 from "./(server-components)/SectionHero3";
import { useTranslation } from "react-i18next";

function PageHome() {
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <main className="nc-PageHome2 relative overflow-hidden">
        <div className=" px-1 sm:px-4 mb-24 ">
          <SectionHero3 className="" tran={t} />
        </div>
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <div className="relative py-16">
            <BackgroundSection />
            <SectionGridFeatureProperty tran={t} />
          </div>

          <SectionAbout
            rightImg={rightImg}
            heading={t("menu.aboutus")}
            btnText=""
            subHeading={t("about")}
          />

          <ServiceSection
            heading={t("menu.services")}
            subHeading={t("service")}
          />
        </div>
      </main>
    )
  );
}

export default PageHome;
