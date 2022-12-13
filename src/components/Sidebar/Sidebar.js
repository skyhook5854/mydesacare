import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  others_pages,
  sidebar_action,
  sidebar_pages,
} from "src/data/sidebar.js";

import NotificationDropdown from "src/components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "src/components/Dropdowns/UserDropdown.js";
import { useTranslation } from "next-i18next";
import { useCommonHooks } from "src/hooks/translation/useCommonHooks";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const { newOrder, sidebarMenus } = useCommonHooks();
  // const { t } = useTranslation("homepage");
  // const { t: t1 } = useTranslation("pageWrapper");

  const router = useRouter();
  return (
    <>
      <nav className="block md:hidden md:left-0 md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Brand */}
          <div className="flex justify-between items-center lg:w52">
            <Link href="/">
              <a
                href="#pablo"
                className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                <img className="h-12" src="/img/logo.svg" alt="Delyva Logo" />
              </a>
            </Link>
            {/* <Link href="#menu" alt="" className="hidden justify-end">
              <a className="" onClick={() => setCollapseShow("border")}>
                <svg
                  className="hidden md:block h-6 mt-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </a>
            </Link> */}
          </div>
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* New Order */}
          <div className="w-full md:flex-col md:min-w-full flex flex-col list-none">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="hidden -ml-4 md:flex text-primary border border-blue-600 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center justify-between items-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800"
              type="button"
              style={{
                width: "15rem",
              }}>
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
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>{newOrder.title}</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="md:hidden w-full flex text-primary border border-blue-600 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center justify-between items-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800"
              type="button">
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
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>{newOrder.title}</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              id="dropdown"
              className="hidden z-50 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
              <ul className="bg-white py-1" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    {newOrder.menu1}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    {newOrder.menu2}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    {newOrder.menu3}
                  </a>
                </li>
              </ul>
            </div>

            <Link href="/topup">
              <a
                href="#pablo"
                className="flex px-4 md:px-0 justify-between items-center text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>{" "}
                <span>MYR 7,096.21</span>
                <span className="text-primary font-semibold">
                  {sidebarMenus.payment}
                </span>
              </a>
            </Link>
          </div>
          {/* User */}
          <ul className="hidden items-center flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }>
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                      <img
                        className="h-12"
                        src="/img/logo.svg"
                        alt="Delyva Logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Actions
            </h6>
            {/* sidebar_action */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {sidebar_action.map((x, key) => (
                <Link key={key} href={x.links}>
                  <a
                    className={
                      "inline-flex gap-2 items-center text-xs py-3 font-bold text-primary" +
                      (router.pathname.indexOf("dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-primary"
                        : "text-blueGray-700 hover:text-blueGray-500 ")
                    }>
                    {/* <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (router.pathname.indexOf("dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "} */}
                    {x.icons}
                    {sidebarMenus[x.name.toLowerCase()]}
                  </a>
                </Link>
              ))}
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Pages
            </h6>
            {/* sidebar_pages */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {sidebar_pages.map((x, key) => (
                <Link key={key} href={x.links}>
                  <a
                    // href="#pablo"
                    className={
                      "inline-flex gap-2 items-center text-xs py-3 font-bold text-primary" +
                      (router.pathname.indexOf("dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-primary"
                        : "text-blueGray-700 hover:text-blueGray-500 ")
                    }>
                    {/* <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (router.pathname.indexOf("dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "} */}
                    {x.icons}
                    {sidebarMenus[x.name.toLowerCase()]}
                  </a>
                </Link>
              ))}

              {/* <li className="hidden items-center">
                <Link href="maps">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("maps") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (router.pathname.indexOf("maps") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Maps
                  </a>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
