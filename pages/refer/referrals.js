import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Referrals() {
  const { t } = useTranslation("homepage");
  const { t: t1 } = useTranslation("refer");
  return (
    <>
      {/* <div>referrals</div> */}
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle dark:bg-gray-800">
            <div className="flex justify-between items-center p-4">
              <div>
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                    className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={t1("content.form.search")}
                  />
                </div>
              </div>
              <div className="">
                <div className="flex flex-row sm:mb-0">
                  <div className="relative">
                    <select className="h-full rounded-l border border-r-0 block appearance-none w-full bg-white text-gray-700 py-2 pr-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option>{t1("content.filter.status.name")}</option>
                      <option>{t1("content.filter.status.success")}</option>
                      <option>{t1("content.filter.status.pending")}</option>
                    </select>
                  </div>
                  <div className="relative">
                    <select className=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white text-gray-700 py-2 pr-10 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                      <option>{t1("content.filter.name")}</option>
                      <option>{t1("content.filter.active")}</option>
                      <option>{t1("content.filter.inactive")}</option>
                    </select>
                  </div>
                  <div className="relative">
                    <select className="h-full rounded-r border-t border-r border-b block appearance-none w-full bg-white text-gray-700 py-2 pr-10 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                      <option>{t1("content.filter.sort")}</option>
                      <option>{t1("content.filter.active")}</option>
                      <option>{t1("content.filter.inactive")}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        {t1("content.tableColumn.name")}
                        <label
                          htmlFor="checkbox-search-all"
                          className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      {t1("content.tableColumn.regEmail")}
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      {t1("content.tableColumn.status")}
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400">
                      {t1("content.tableColumn.earnings")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <a className="text-blueGray-500 block" href="#pablo">
                          <div className="items-center flex">
                            <span className="w-8 h-8 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                              <img
                                alt="..."
                                className="w-full rounded-full align-middle border-none shadow-lg"
                                src="/img/team-1-800x800.jpg"
                              />
                            </span>
                          </div>
                        </a>
                        <p className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Jane Cooper
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      jane.cooper@example.com
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">
                        {t1("content.filter.status.success")}
                      </span>
                    </td>
                    <td className="text-right py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      MYR1.00
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <a className="text-blueGray-500 block" href="#pablo">
                          <div className="items-center flex">
                            <span className="w-8 h-8 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                              <img
                                alt="..."
                                className="w-full rounded-full align-middle border-none shadow-lg"
                                src="/img/team-1-800x800.jpg"
                              />
                            </span>
                          </div>
                        </a>
                        <p className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Cody Fisher
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      cody.fisher@example.com
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-200 dark:text-yellow-900">
                        {t1("content.filter.status.pending")}
                      </span>
                    </td>
                    <td className="text-right py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      N/A
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
