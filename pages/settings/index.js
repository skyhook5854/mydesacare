import React, { useState } from "react";
import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { motion, AnimateSharedLayout } from "framer-motion";
// import page
import BillingInformation from "./user_informations/billing-information";
import Admin2 from "src/layouts/Admin2";
import AccountInformation from "./user_informations/account-information";
import Security from "./user_informations/security";

export default function UserInformations() {
  const [selected, setSelected] = useState(0);
  const { t: t1 } = useTranslation("settings");
  const [page, setPage] = useState(<AccountInformation />);
  function clickHandler(event) {
    if (event === "Account information") {
      setPage(<AccountInformation />);
    } else if (event === "Billing information") {
      setPage(<BillingInformation />);
    } else if (event === "Security") {
      setPage(<Security />);
    }
  }

  return (
    <>
      <div className="mx-auto px-4 md:px-10 py-10 ">
        {/* <div class="md:hidden flex items-center justify-center w-full">
          <label htmlFor="tabs" class="sr-only">
            Select your country
          </label>
          <select
            id="tabs"
            class="w-full mx-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Account information</option>
            <option>Billing information</option>
            <option>Security</option>
          </select>
        </div> */}

        <ul class="hidden w-full lg:w-6/12 mx-auto md:flex justify-center items-center  rounded-lg divide-x divide-gray-200  sm:flex dark:divide-gray-700">
          <li class="w-full">
            <a
              onClick={() => clickHandler("Account information")}
              // href="#"
              class="inline-block relative py-2 px-4 w-full text-sm font-medium text-center text-primary border-b border-blue-600  ">
              {/* {t1("content.accountInfo.title")} */}
              Counselor Information
            </a>
          </li>
          {/* <li class="w-full">
            <a
              onClick={() => clickHandler("Billing information")}
              // href="#"
              class="inline-block relative py-2 px-4 w-full text-sm font-medium text-center  bg-white border-t border-b border-blue-600   hover:text-gray-700 hover:bg-gray-50  dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
              {t1("content.billingInfo.title")}
            </a>
          </li> */}
          {/* <li class="w-full">
            <a
              onClick={() => clickHandler("Security")}
              // href="#"
              class="inline-block relative py-2 px-4 w-full text-sm font-medium text-center  bg-white border border-blue-600  rounded-r-lg hover:text-gray-700 hover:bg-gray-50  dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
              {t1("content.security.title")}
            </a>
          </li> */}
        </ul>

        {page}
      </div>
    </>
  );
}
// export async function getServerSideProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["settings"])),
//     },
//   };
// }

UserInformations.layout = Admin2;
