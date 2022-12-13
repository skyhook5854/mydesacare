/* eslint-disable react/jsx-no-target-blank */
import Admin from "src/layouts/Admin";
import React from "react";
import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Analytic() {
  return (
    <>
      <div className="px-4 md:px-10 mx-auto w-full min-h-screen">
        <div className="flex bg-white rounded-md px-10 py-10">
          <h2 className="font-semibold text-4xl text-blueGray-600">Analytic</h2>
        </div>
      </div>
    </>
  );
}

Analytic.layout = Admin;
// export async function getServerSideProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         "onboarding",
//         "addressbookpage",
//         "billingpage",
//         "components",
//         "homepage",
//         "importBulkOrder",
//         "integrationPage",
//         "multiPointOrder",
//         "orderDetailsPage",
//         "orderpage",
//         "pageWrapper",
//         "settings",
//         "topuppage",
//       ])),
//     },
//   };
// }
