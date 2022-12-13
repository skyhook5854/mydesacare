import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function PaymentConfirmation() {
  const { t } = useTranslation("homepage");
  const { t: t1 } = useTranslation("topuppage");
  return (
    <>
      <div className="absolute top-0 left-0 z-1 w-full h-screen">
        <div className="bg-white rounded-md mb-10">
          <div className="flex-col md:flex justify-center items-center py-10 px-12">
            <Link href="/">
              <a href="/" className="flex items-center py-18">
                <span className="text-primary px-2 font-extrabold">
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </span>
                <p className="text-md font-semibold text-primary">
                  {t1("content.topupConfirmation.changePayment")}
                </p>
              </a>
            </Link>
            <div className="flex flex-col items-center justify-center">
              <h4 className="font-bold text-4xl text-black py-10">
                {t1("content.topupConfirmation.title")}
              </h4>
              <div className="w-full flex justify-between border-b py-10">
                <div className="text-gray-800 font-medium">
                  {t1("content.topupTab.paymentMethod")}
                </div>
                <div className="text-primary">Credit/debit card</div>
              </div>
              <div className="w-full flex justify-between border-b py-10">
                <div className="text-gray-800 font-medium">
                  MYR 250 {t1("content.topupConfirmation.credit")}
                </div>
                <div className="text-primary">MYR250</div>
              </div>
              <div className="w-full flex justify-between border-b py-10">
                <div className="text-gray-800 font-medium">
                  {t1("content.topupConfirmation.totalTopup")}
                </div>
                <div className="text-primary">MYR250</div>
              </div>
              <div className="w-full flex flex-col py-8">
                <h4 className="text-2xl text-gray-800 py-4">
                  {t1("content.topupConfirmation.discoundCode")}
                </h4>
                <div className="">
                  <label
                    className="flex items-center  text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="referral-code">
                    {t1("content.topupConfirmation.promoCode")}
                  </label>
                  <input
                    type="name"
                    className="border border-gray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Referral code"
                  />
                </div>

                <div class="relative w-full py-8">
                  <label class="w-full inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      class="form-checkbox border rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span class="ml-2 text-sm font-semibold text-blueGray-700">
                      {t1("content.topupForm.Terms")}{" "}
                      <a href="#terms" class="w-full text-primary">
                        {t1("content.topupForm.Terms2")}
                      </a>
                    </span>
                  </label>
                </div>
                <hr className=" border-gray-200 h-5" />
                <button className="w-full h-10 mt-4  justify-center py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                  <p className="text-center">{t1("content.topupForm.save")}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// PaymentConfirmation.layout = Admin;
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
