"use client";
import React, { FC, useEffect, useState } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import PropertyCardH from "@/components/PropertyCardH";
import { userAppStore } from "@/store/store";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
}

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS;

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  const { searchLocation, setSearchLocation, selectionType, setSelectionType } =
    userAppStore();

  const [filtredData, setFiltredData] = useState(data);

  useEffect(() => {
    const filteredData_: any = data.filter((stay) => {
      // Filter by location (assuming stay.map contains the location string)
      const isLocationMatch = stay.map.place.includes(searchLocation);

      // Filter by selectionType (checked types)
      const selectedTypes = selectionType
        .filter((type: any) => type.checked)
        .map((type: any) => type.value);

      const isTypeMatch = selectedTypes.includes(stay.type);

      // Return only stays that match both filters
      return isLocationMatch && isTypeMatch;
    });

    setFiltredData(filteredData_);
  }, [searchLocation, selectionType]);

  return (
    <div className={`nc-SectionGridFilterCard ${className}`}>
      <Heading2
        heading="Property in Marrakesh"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            {data.length} Property
          </span>
        }
      />

      {/*<div className="mb-8 lg:mb-11">
        <TabFilters />
      </div>*/}
      <div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-2 ">
        {filtredData.map((stay) => (
          <PropertyCardH key={stay.id} data={stay} />
        ))}
      </div>
      {/*<div className="flex mt-16 justify-center items-center">
        <Pagination />
        </div>*/}
    </div>
  );
};

export default SectionGridFilterCard;
