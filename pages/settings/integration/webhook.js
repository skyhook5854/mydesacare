import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Webhook() {
  const { t: t1 } = useTranslation("settings");
  return (
    <>
      <div className="py-10 px-10 mx-auto ">
        <h3 className="flex flex-col items-center justify-center pb-10 text-black font-bold text-4xl">
          Webhook <br />
        </h3>

        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="relative py-8">
            <button className="absolute top-0 right-0 h-10 m-3 justify-center  py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
              <p className="text-center">
                {t1("content.integration.addNewEndpoint")}
              </p>
            </button>
          </div>
        </div>
        <div class=" flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        {t1("content.integration.tableColumn.endpoint")}
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        {t1("content.integration.tableColumn.eventType")}
                      </th>
                      <th
                        scope="col"
                        class="text-left py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                        {t1("content.integration.tableColumn.status")}
                      </th>
                      <th
                        scope="col"
                        class="text-right py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                        {t1("content.integration.tableColumn.action")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        https://my.delyva.app/customer/settings/webhook
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        order.created
                      </td>
                      <td class="text-left py-4 px-6 text-sm text-red-500 whitespace-nowrap dark:text-gray-400">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">
                          {t1("content.integration.tableColumn.eventType")}
                        </span>
                      </td>
                      <td class="text-right py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        <span className="flex justify-end ">
                          <a className="text-primary px-4">
                            {t1("content.integration.edit")}
                          </a>
                          <a className="text-red-600">
                            {t1("content.integration.delete")}
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        https://my.delyva.app/customer/settings/webhook
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        order_tracking.update
                      </td>
                      <td class="text-left py-4 px-6 text-sm text-red-500 whitespace-nowrap dark:text-gray-400">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-200 dark:text-yellow-900">
                          Warning
                        </span>
                      </td>
                      <td class="text-right py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        <span className="flex justify-end ">
                          <a className="text-primary px-4">
                            {t1("content.integration.edit")}
                          </a>
                          <a className="text-red-600">
                            {t1("content.integration.delete")}
                          </a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
      ...(await serverSideTranslations(locale, ["settings"])),
    },
  };
}
