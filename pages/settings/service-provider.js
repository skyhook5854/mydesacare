import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ServiceProvider() {
  const { t: t1 } = useTranslation("settings");
  return (
    <>
      {/* <div>Earnings</div> */}
      <div className="flex-col md:flex py-10 px-12">
        <div className="md:flex justify-between items-center gap-6">
          <div className="w-full md:w-1/2 shadow rounded py-4 px-4 ">
            <span className="text-sm">
              {t1("content.services.totalSuccessfulRefrrals")}
            </span>
            <h3 className="text-gray-800 font-semibold text-2xl">33</h3>
          </div>
          <div className="w-full md:w-1/2 shadow rounded py-4 px-4 ">
            <span className="text-sm">
              {t1("content.services.totalPendingRefrrals")}
            </span>
            <h3 className="text-gray-800 font-semibold text-2xl">19</h3>
          </div>
          <div className="w-full md:w-1/2 shadow rounded py-4 px-4 ">
            <span className="text-sm">
              {t1("content.services.totalEarnings")}
            </span>
            <h3 className="text-gray-800 font-semibold text-2xl">MYR33.00</h3>
          </div>
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
