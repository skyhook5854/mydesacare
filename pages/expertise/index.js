/* eslint-disable react/jsx-no-target-blank */
import Admin from "src/layouts/Admin";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Expertise() {
  const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex justify-center mb-0 list-none flex-wrap pt-3 pb-4 flex-row mx-10"
              role="tablist">
              <li className="text-center -mb-px">
                <a
                  className={
                    "text-xs font-bold uppercase leading-2 pb-4 px-5 py-3 " +
                    (openTab === 1
                      ? "text-" + color + "-600 border-b border-purple-500"
                      : "text-gray-600")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#counsellor"
                  role="tablist">
                  Counsellor
                </a>
              </li>
              <li className="text-center -mb-px">
                <a
                  className={
                    "text-xs font-bold uppercase leading-2 pb-4 px-5 py-3 " +
                    (openTab === 2
                      ? "text-" + color + "-600 border-b border-purple-500"
                      : "text-gray-600")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#expertise"
                  role="tablist">
                  Expertise
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col break-words px-4 md:px-10 mx-auto w-full min-h-screen">
              <div className="flex-auto px-4 py-20 mx-0 bg-white rounded-md">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="counsellor">
                    <p className="font-bold text-black text-3xl text-center tracking-wider">
                      I DONO WAT 2 PUT HERE.
                    </p>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="expertise">
                    <div>
                      <p className="font-bold text-black text-3xl text-center tracking-wider">
                        Select Your Expertise
                      </p>
                      <div className="px-4 md:px-10 mx-auto w-full min-h-screen pt-10">
                        <div className="px-4 md:px-14 py-20 mx-0 shadow-lg rounded-xl">
                          <form className="space-y-6">
                            <div>
                              <label
                                htmlFor="expertise"
                                className="block mb-2 text-sm font-medium text-gray-900">
                                Expertise Category
                              </label>
                              <select
                                id="expertise"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option selected>Expertise Category</option>
                                <option value="1">Family</option>
                                <option value="2">Single</option>
                                <option value="3">Married</option>
                                <option value="4">Child</option>
                              </select>
                            </div>

                            <hr />

                            <p className="font-semibold text-black text-xl mb-2">
                              Expertise Sub-Category
                            </p>
                            <div
                              className="relative m-1"
                              style={{ width: "-webkit-fill-available" }}>
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                  className="w-5 h-5 text-gray-500"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"></path>
                                </svg>
                              </div>
                              <input
                                type="text"
                                id="table-search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
                                placeholder="Search"
                                style={{ width: "-webkit-fill-available" }}
                              />
                            </div>
                            <div className="flex justify-between -mt-2">
                              <span className="text-sm font-light">
                                2 sub-category selected
                              </span>
                              <span className="text-sm font-bold cursor-pointer text-blue-600">
                                Select All
                              </span>
                            </div>

                            <div className="w-full max-h-[400px] overflow-y-auto text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                              <label
                                htmlFor="divorced"
                                className="flex justify-between block py-6 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                Divorced
                                <label
                                  htmlFor="divorced"
                                  className="inline-flex relative items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value=""
                                    id="divorced"
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                              </label>
                              <label
                                htmlFor="child"
                                className="flex justify-between block py-6 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                Child
                                <label
                                  htmlFor="child"
                                  className="inline-flex relative items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value=""
                                    id="child"
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                              </label>
                              <label
                                htmlFor="drug"
                                className="flex justify-between block py-6 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                Drug
                                <label
                                  htmlFor="drug"
                                  className="inline-flex relative items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value=""
                                    id="drug"
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                              </label>
                              <label
                                htmlFor="others"
                                className="flex justify-between block py-6 px-4 w-full rounded-b-lg border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                Others
                                <label
                                  htmlFor="others"
                                  className="inline-flex relative items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value=""
                                    id="others"
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                              </label>
                            </div>

                            <hr />

                            <div className="flex justify-between">
                              <a className="mx-2 border cursor-pointer w-full text-purple-600 bg-white hover:bg-purple-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Back
                              </a>
                              <button
                                type="submit"
                                className="mx-2 w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Confirm
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Tabs color="indigo" />
    </>
  );
}

Expertise.layout = Admin;
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "onboarding",
        "addressbookpage",
        "billingpage",
        "components",
        "homepage",
        "importBulkOrder",
        "integrationPage",
        "multiPointOrder",
        "orderDetailsPage",
        "orderpage",
        "pageWrapper",
        "settings",
        "topuppage",
      ])),
    },
  };
}
