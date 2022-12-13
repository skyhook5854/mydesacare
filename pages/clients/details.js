/* eslint-disable react/jsx-no-target-blank */
import Admin from "src/layouts/Admin";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ClientDetail() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="mx-auto w-full min-h-screen">
        <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider">
          <div className="max-w-5xl flex items-start h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
            <div
              id="profile"
              className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
              <div className="p-4 md:p-12 text-center lg:text-left">
                <div
                  className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://img.freepik.com/free-vector/hand-drawn-visit-psychologist-concept_52683-69070.jpg?t=st=1655866362~exp=1655866962~hmac=9d1c3380a10942a7be91daaef03ff159e89d9538a3fa4058beae9c191eb2ccbd&w=996')",
                  }}></div>
                <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                  Syakir Zulpadhli
                </h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                  <i className="h-4 fill-current text-green-700 pr-3 fas fa-brain"></i>{" "}
                  Anxiety
                </p>
                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                  <i className="h-4 fill-current text-green-700 pr-4 fas fa-location-arrow"></i>
                  Tanjung Malim
                </p>
                <p className="pt-8 text-sm">
                  Pesakit ini mengalami sakit kepala berpanjangan. Lorem ipsum
                  dolor sit amet. Est enim fuga aut nostrum magnam et debitis
                  atque qui atque molestias.
                </p>

                <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                  <ol className="relative border-l border-gray-200 ">
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                        February 2022
                      </time>
                      <h3 className="text-lg font-semibold text-gray-900">
                        1&#x02E2;&#x1D57; Appointment
                      </h3>
                      <p className="mb-4 text-base font-normal text-gray-500">
                        Lorem ipsum dolor sit amet. Est enim fuga aut nostrum
                        magnam et debitis atque qui atque molestias.
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">
                        Learn more{" "}
                        <svg
                          className="ml-2 w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                        March 2022
                      </time>
                      <h3 className="text-lg font-semibold text-gray-900">
                        2&#x207F;&#x1D48; Appointment
                      </h3>
                      <p className="text-base font-normal text-gray-500">
                        Lorem ipsum dolor sit amet. Est enim fuga aut nostrum
                        magnam et debitis atque qui atque molestias.
                      </p>
                    </li>
                    <li className="ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                        April 2022
                      </time>
                      <h3 className="text-lg font-semibold text-gray-900">
                        3&#x02B3;&#x1D48; Appointment
                      </h3>
                      <p className="text-base font-normal text-gray-500">
                        Lorem ipsum dolor sit amet. Est enim fuga aut nostrum
                        magnam et debitis atque qui atque molestias.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mt-16 -ml-4 z-10">
              <img
                className="xl:max-w-[420px] max-w-[300px] rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                src="https://img.freepik.com/free-vector/woman-giving-comfort-support-friend_74855-5301.jpg?w=1380"
              />
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="xl:max-w-[420px] max-w-[300px] mt-4 p-2 px-4 mx-auto rounded-none bg-yellow-300 lg:rounded-lg shadow-2xl hidden lg:block">
                Recommend New Counselor
                <i className="ml-2 fas fa-sign-out-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal != false ? (
        <>
          <div
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-40 right-0 left-20 z-40 w-full h-modal md:h-full">
            <div className="mx-auto relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
                <div className="py-6 px-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900">
                    Recommend New Counselor
                  </h3>
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="expertise"
                        class="block mb-2 text-sm font-medium text-gray-900">
                        New Expertise
                      </label>
                      <select
                        id="expertise"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>Expertise</option>
                        <option value="1">Panic</option>
                        <option value="2">Anxiety</option>
                        <option value="3">Bipolar</option>
                        <option value="4">Stress</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="counselor"
                        class="block mb-2 text-sm font-medium text-gray-900">
                        New Counselor
                      </label>
                      <select
                        id="counselor"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>Counselor</option>
                        <option value="1">Syakir</option>
                        <option value="2">Dr Ali</option>
                        <option value="3">Prof Abu</option>
                        <option value="4">Prof Madya Aminah</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                      Recommend
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black bg-opacity-50 fixed inset-0 z-20"></div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

ClientDetail.layout = Admin;
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
