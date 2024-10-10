import React, { FC } from "react";
import imagePng from "@/images/23.jpeg";
import Image from "next/image";
import HeroRealEstateSearchForm from "../(client-components)/(HeroSearchForm)/(real-estate-search-form)/HeroRealEstateSearchForm";

export interface SectionHero3Props {
  className?: string;
}

const SectionHero3: FC<SectionHero3Props> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`} data-nc-id="SectionHero3">
      <div className="absolute z-10 inset-x-0 top-[10%] sm:top-[15%] text-center flex flex-col items-center max-w-2xl mx-auto space-y-4 lg:space-y-5 xl:space-y-8">
        <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[115%] ">
          Discover the Soul <br /> of Marrakech
        </h2>
      </div>

      <div className="container relative aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-h-8 ">
        <Image
          className="absolute inset-0 object-cover  rounded-xl"
          src={imagePng}
          alt="hero"
          priority
        />
      </div>
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:absolute lg:inset-0 opacity-90 px-3">
        <HeroRealEstateSearchForm className="" />
      </div>
    </div>
  );
};

export default SectionHero3;
