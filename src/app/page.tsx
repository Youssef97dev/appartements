import React from "react";
import rightImg from "@/images/about-hero-right.png";
import BackgroundSection from "@/components/BackgroundSection";

import SectionGridFeatureProperty from "./(home)/SectionGridFeatureProperty";
import SectionHero2 from "@/app/(server-components)/SectionHero2";
import SectionAbout from "@/components/SectionAbout";
import ServiceSection from "@/components/ServiceSection";
import SectionHero3 from "./(server-components)/SectionHero3";

function PageHome() {
  return (
    <main className="nc-PageHome2 relative overflow-hidden">
      <div className=" px-1 sm:px-4 mb-24 ">
        <SectionHero3 className="" />
      </div>
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeatureProperty />
        </div>

        <SectionAbout
          rightImg={rightImg}
          heading="About Us."
          btnText=""
          subHeading="Welcome to our charming Marrakech apartments! Located in vibrant neighborhoods, our spaces blend modern comfort with Moroccan style. Perfect for both short and long stays, we offer all the amenities you need for a memorable visit. We look forward to hosting you!"
        />

        <ServiceSection
          heading="Services."
          subHeading="With all the conditions for your maximum comfort."
        />
      </div>
    </main>
  );
}

export default PageHome;
