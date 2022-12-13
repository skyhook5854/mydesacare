import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import data
import { integrations } from "src/data/integration";

// import page
import ApiIntegration from "./apiIntegration";
import Webhook from "./webhook";

export default function Integrations() {
  const { t: t1 } = useTranslation("settings");
  const [page, setPage] = useState(<ApiIntegration />);
  function clickHandler(event) {
    if (event === "Api integration") {
      setPage(<ApiIntegration />);
    } else if (event === "Webhook") {
      setPage(<Webhook />);
    }
  }
  return (
    <>
      <div className=" mx-auto">
        <div class="hidden">
          <label htmlFor="tabs" class="sr-only">
            {t1("content.integration.title")}
          </label>
          <select
            id="tabs"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>{t1("content.integration.title")}</option>
            <option>Webhook</option>
          </select>
        </div>

        <ul class="w-6/12 mx-auto flex justify-center items-center pt-10 rounded-lg divide-x divide-gray-200  sm:flex dark:divide-gray-700">
          <li class="w-full">
            <a
              onClick={() => clickHandler("Api integration")}
              // href="#"
              class="inline-block relative py-2 px-4 w-full text-sm font-medium text-center text-primary bg-white border border-blue-600  rounded-l-lg hover:text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
              {t1("content.integration.title")}
            </a>
          </li>
          <li class="w-full">
            <a
              onClick={() => clickHandler("Webhook")}
              // href="#"
              class="inline-block relative py-2 px-4 w-full text-sm font-medium text-center bg-white border-t border-r border-b border-blue-600 rounded-r-lg hover:text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
              Webhook
            </a>
          </li>
        </ul>
        {page}
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
