import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Admin from "src/layouts/Admin";
// import data
import { plan } from "src/data/plan";
import PaymentConfirmation from "./payment-confirmation";
import SelectPayment from "./select-payment";
import { usePaymentMethod, useTopupPlan } from "src/actions/common";

export default function Topup() {
  const { t } = useTranslation("homepage");
  const { t: t1 } = useTranslation("topuppage");
  const [page, setPage] = useState(0);
  function renderHeader() {
    switch (page) {
      case 0:
        return <h3 className="font-bold text-lg mb-3">Select Plan</h3>;
      case 1:
        return <>
          <div className="flex flex-wrap">
            <span className="mb-3 cursor-pointer" onClick={() => setPage(0)}>
              <i class="far fa-arrow-alt-circle-left"></i> Back to Select Plan
            </span>
          </div>
          <h3 className="font-bold text-lg mb-3">Select Payment</h3>
        </>;
      case 2:
        return <>
          <div className="flex flex-wrap">
            <span className="mb-3 cursor-pointer" onClick={() => setPage(1)}>
              <i class="far fa-arrow-alt-circle-left"></i> Back to Select Payment
            </span>
          </div>
          <h3 className="font-bold text-lg mb-3">Topup Confirmation</h3>
        </>;
      default:
        break;
    }
  }

  const { data: topupPlan, isLoading: isLoadingTopupPlan } = useTopupPlan();
  const { data: paymentMethod, isLoading: isLoadingPaymentMethod } = usePaymentMethod();

  return (
    <>
      <div className="px-4 md:px-10 mx-auto w-full min-h-screen ">
        <div className="relative bg-white rounded-md mb-10">
          <div className="flex-col md:flex py-10 px-12">
            <div className="md:flex justify-between items-center gap-6">
              <div className="w-full md:w-1/2 shadow rounded py-4 px-4 ">
                <span className="text-sm">{t1("header.pageTitleTopup")}</span>
                <h3 className="text-primary font-bold text-3xl">MYR7,096.21</h3>
              </div>
              <div className="w-full md:w-1/2 shadow rounded py-4 px-4 ">
                <span className="text-sm">{t1("header.unbilledAmount")}</span>
                <h3 className="text-gray-800 font-bold text-3xl">MYR13.00</h3>
              </div>
            </div>
          </div>
          <div className="flex-col md:flex py-4 px-12">
            {renderHeader()}
            <form>
              {/* plan */}
              <div className="flex-col md:flex ">
                <div className="md:flex justify-between items-center gap-6">
                  {page === 0 && (
                    <>
                      {topupPlan?.data.prices.map((x) => (
                        <div
                          onClick={() => setPage(1)}
                          className="w-full shadow rounded py-4 px-4  hover:text-primary hover:border hover:border-blue-600">
                          <fieldset>
                            <legend className="hidden">select plan</legend>
                            <>
                              <a className="">
                                <h3 className=" font-bold text-3xl">
                                  {x.name}
                                </h3>
                                <span className="text-sm text-black">
                                  {x.description}
                                </span>
                              </a>
                            </>
                          </fieldset>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                {page === 1 && (
                  <>
                    <div className="relative w-full md:flex justify-between items-center gap-6 mb-3">
                      <div className="w-full mb-8">
                        <label
                          className="block text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="topup">
                          {t1("content.topupTabs.topupAmount")} (RM20{" "}
                          {t1("content.minimum")})
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder={t1("content.topupTabs.topupAmount")}
                        />
                        <span className="hidden absolute md:flex text-sm py-2">
                          {t1("content.topupForm.msg")}
                        </span>
                      </div>
                      <div className="w-1/2 text-center">
                        <button
                          onClick={() => setPage(page + 1)}
                          className="bg-primary text-white active:bg-blueGray-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button">
                          {t1("content.topupForm.topupNow")}
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {page === 1 && <SelectPayment />}
                {page === 2 && <PaymentConfirmation />}
                {/* <hr className="mt-2 h-5"></hr> */}
                {/* {page !== 0 && (
                  <div className="flex">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="mt-4 border-2 m-2 text-black hover:text-white justify-center inline-flex w-full  py-2 px-3 text-sm font-medium text-center  bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                      <p className="text-center  ">Back</p>
                    </button>

                    <button
                      onClick={() => setPage(page + 1)}
                      className="w-full h-10 mt-4  m-2 justify-center  py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                      <p className="text-center">Next</p>
                    </button>
                  </div>
                )} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
Topup.layout = Admin;
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
