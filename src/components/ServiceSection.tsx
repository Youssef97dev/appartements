import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import { MdOutlineCleanHands } from "react-icons/md";

export interface ServiceSectionProps {
  className?: string;
  heading: ReactNode;
  subHeading: string;
}

const ServiceSection: FC<ServiceSectionProps> = ({
  className = "",
  heading,
  subHeading,
}) => {
  return (
    <div id="service" className={`nc-SectionHero relative ${className}`}>
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {subHeading}
          </span>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <i className="las la-blender text-4xl"></i>
              </div>
              <span className="font-bold">Equipped kitchen</span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <i className="las la-snowflake text-4xl"></i>
              </div>
              <span className="font-bold">Air conditioning</span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <i className="las la-shower text-4xl"></i>
              </div>
              <span className="font-bold">Italian shower</span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4 flex justify-center items-center">
                <MdOutlineCleanHands size={37} />
              </div>
              <span className="font-bold">Botanika Bathroom</span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <i className="las la-wifi text-4xl"></i>
              </div>
              <span className="font-bold">Wifi</span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <i className="las la-tv text-4xl"></i>
              </div>
              <span className="font-bold">TV</span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <i className="las la-door-open text-4xl"></i>
              </div>
              <span className="font-bold">Balcony</span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <i className="las la-mosque text-4xl"></i>
              </div>
              <span className="font-bold">View</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
