import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Earnings() {
  const { t } = useTranslation("homepage");
  const { t: t1 } = useTranslation("refer");
  return (
    <>
      {/* <div>Earnings</div> */}
      <div className="flex-col md:flex py-10 px-12">
        {/* dropdown */}

        <div class="relative inline-flex">
          {/* <svg
            class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232">
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
              fill-rule="nonzero"
            />
          </svg> */}
          <select class="mb-6 border-none border-gray-300 rounded-full font-semibold text-gray-800 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
            <option>{t1("content.earnings.month.name")}</option>
            <option>{t1("content.earnings.month.january")}</option>
            <option>{t1("content.earnings.month.february")}</option>
          </select>
        </div>

        <div className="md:flex justify-between items-center gap-6">
          <div className="w-full md:w-1/2 shadow rounded py-4 px-4 ">
            <span className="text-sm">
              {t1("content.earnings.totalSuccess")}
            </span>
            <h3 className="text-gray-800 font-semibold text-2xl">33</h3>
          </div>
          <div className="w-full md:w-1/2 shadow rounded py-4 px-4 ">
            <span className="text-sm">
              {t1("content.earnings.totalPending")}
            </span>
            <h3 className="text-gray-800 font-semibold text-2xl">19</h3>
          </div>
          <div className="w-full md:w-1/2 shadow rounded py-4 px-4 ">
            <span className="text-sm">
              {t1("content.earnings.totalEarnings")}
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
        "refer",
      ])),
    },
  };
}
