"use client";
import React, { FC, useState, useEffect } from "react";
import SocialsList from "@/shared/SocialsList";
import Label from "@/components/Label";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { useTranslation } from "react-i18next";
import { BounceLoader } from "react-spinners";

export interface PageContactProps {}

const PageContact: FC<PageContactProps> = ({}) => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  const info = [
    {
      title: `🗺 ${t("contact.address")}`,
      desc: "Angle Av Echouhada et Av El Kadissia, Marrakech 40000, Maroc",
    },
    {
      title: "💌 EMAIL",
      desc: "reservations@lesalamamarrakech.com",
    },
    {
      title: `☎ ${t("contact.phone")}`,
      desc: "+212 675-480018",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <div className={`nc-PageContact overflow-hidden`}>
      <div className="mb-24 lg:mb-32">
        <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>{t("contact.fullname")}</Label>

                  <Input
                    placeholder="Example Doe"
                    type="text"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>

                  <Textarea className="mt-1" rows={6} />
                </label>
                <div>
                  <ButtonPrimary type="submit">
                    {t("contact.send")}
                  </ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen flex justify-center items-center">
      <BounceLoader color="#805dca" />
    </div>
  );
};

export default PageContact;
