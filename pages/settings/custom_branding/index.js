import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CustomBranding() {
  const { t: t1 } = useTranslation("settings");
  return (
    <>
      <div className="px-4 md:px-10 mx-auto w-full min-h-screen">
        <div className="flex flex-col items-center justify-center  py-2  sm:px-6 lg:px-8">
          <h4 className="text-4xl font-bold py-10">
            {t1("content.customBranding.title")}
          </h4>
          <form className="w-full mb-10">
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                {t1("content.customBranding.companyLogo")}
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col rounded-lg border-dashed border-2  w-full py-10 group text-center">
                  <div className="text-center flex flex-col justify-center items-center  ">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                      <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                    </svg>
                    <p className="mb-3 font-medium text-gray-900 flex flex-wrap justify-center">
                      <span className="text-primary font-medium">
                        {t1("content.customBranding.uploadfile")}
                      </span>
                      &nbsp;
                      <span className="text-gray-500">
                        {t1("content.customBranding.dnd")}
                      </span>
                    </p>
                    <p>
                      <span className="text-sm text-gray-300">
                        PNG, JPG, GIF up to 10MB
                      </span>
                    </p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>

            <div className="flex pt-10 gap-2">
              <div className="mb-6 w-1/2 flex flex-justify-between items-center">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {t1("content.customBranding.brandingColor")}
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="#0000FF"
                  />
                </div>
                <span className="flex place-self-end w-10 h-10 py-4 rounded-md bg-primary ml-2"></span>
              </div>
              <div className="mb-6 w-1/2 flex flex-justify-between items-center">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {t1("content.customBranding.brandingColor")}
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="#0000FF"
                  />
                </div>
                <span className="flex place-self-end w-10 h-10 py-4 rounded-md bg-purple-800 ml-2"></span>
              </div>
            </div>
            <hr className=" h-5 my-2"></hr>
            <div className="flex">
              <button className="w-full h-10 mt-4  justify-center  py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                <p className="text-center">{t1("content.save")}</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["settings"])),
    },
  };
}
