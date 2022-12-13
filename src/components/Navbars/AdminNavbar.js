import { useTranslation } from "next-i18next";
import React from "react";

import UserDropdown from "src/components/Dropdowns/UserDropdown.js";
import { useCommonHooks } from "src/hooks/translation/useCommonHooks";
import LanguageDropdown from "../Dropdowns/languageDropdown";

export default function Navbar() {
  const { bannerFreshLook, whatNew } = useCommonHooks();
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-6">
        <div className="w-full mx-auto items-center md:flex-nowrap flex-wrap md:px-4 px-4">
          <div
            className="hidden w-full md:flex justify-between p-4 bg-white rounded-lg dark:bg-blue-200"
            id="alertId"
            role="alert">
            <div className="md:flex items-center">
              {/* <span className="flex items-center justify-center bg-blue-100 rounded w-8 h-8">
                <svg
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span> */}
              <div className="ml-3 text-sm font-medium dark:text-blue-900">
              
                {/* {bannerFreshLook}
                <a
                  href="/notifications"
                  className="font-semibold text-primary hover:text-blue-800 dark:hover:text-blue-900 no-underline">
                  🎉 <span className="ml-2">{whatNew}</span>
                </a> */}
              </div>
            </div>

            {/* User */}
            <ul className="hidden md:flex  flex-col justify-between md:flex-row list-none items-center gap-2">
              <LanguageDropdown />

              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <UserDropdown />
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
