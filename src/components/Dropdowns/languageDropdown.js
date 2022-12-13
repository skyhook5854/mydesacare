import React, { useState, createRef } from "react";
import { createPopper } from "@popperjs/core";
import language from "../../data/langArr.json";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { languageAtom } from "src/recoil/utils";

const LanguageDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const [activeLang, setLanguage] = useRecoilState(languageAtom);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const renderLocale = (locale) => {
    return locale;
  };

  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}>
        <div className="items-center flex font-bold">{activeLang} ▼</div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }>
        {language.map((x, key) => {
          return (
            <Link key={key} href="/" locale={renderLocale(x.locale)}>
              <a
                href="#"
                onClick={() => setLanguage(x.label)}
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }>
                {x.label}
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default LanguageDropdown;
