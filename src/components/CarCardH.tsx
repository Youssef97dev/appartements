import React, { FC } from "react";
import { CarDataType } from "@/data/types";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import Avatar from "@/shared/Avatar";
import Image from "next/image";
import Link from "next/link";

export interface CarCardHProps {
  className?: string;
  data?: CarDataType;
}

const CarCardH: FC<CarCardHProps> = () => {
  return <div></div>;
};

export default CarCardH;
