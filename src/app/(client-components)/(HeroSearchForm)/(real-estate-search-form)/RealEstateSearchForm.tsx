"use client";
import React, { FC } from "react";
import LocationInput from "../LocationInput";
import PriceRangeInput from "./PriceRangeInput";
import PropertyTypeSelect from "./PropertyTypeSelect";
import { useTranslation } from "react-i18next";

export interface RealEstateSearchFormProps {}

const RealEstateSearchForm: FC<RealEstateSearchFormProps> = ({}) => {
  const { t } = useTranslation();
  const renderForm = () => {
    return (
      <form className="w-full relative xl:mt-8 flex flex-col lg:flex-row lg:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700 lg:divide-y-0">
        <LocationInput desc={t("hero.where")} className="flex-[1]" />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <PropertyTypeSelect />
      </form>
    );
  };

  return renderForm();
};

export default RealEstateSearchForm;
