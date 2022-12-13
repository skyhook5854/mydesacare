import React from "react";

// import data
import { receipt_list } from "src/data/receipt";
import { useBillingHooks } from "src/hooks/translation/useBillingHooks";

export default function CreditNotes() {
  const { billTable } = useBillingHooks();
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle dark:bg-gray-800">
            <div className="flex justify-between items-center p-4">
              <div>
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1">
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="">
                <div className="flex flex-row mb-1 sm:mb-0">
                  <div className="relative">
                    <select className="h-full rounded-l border block appearance-none w-full bg-white text-gray-700 p-2.5 pr-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option>Status</option>
                      <option>Success</option>
                      <option>Pending</option>
                    </select>
                  </div>
                  <div className="relative">
                    <select className=" h-full border-t sm:rounded-r-none sm:border-r-0 border-r-0 border-l-0 border-b block appearance-none w-full bg-white text-gray-700 p-2.5 pr-10 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                      <option>Filter</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="relative">
                    <select className="h-full rounded-r border-t border-r border-b block appearance-none w-full bg-white text-gray-700 p-2.5 pr-10 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                      <option>Sort</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <button className="border rounded-md flex px-2 py-2">
                  Get PDF {""}
                  <svg
                    className="w-6 h-6 ml-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          class="w-4 h-4 text-primary bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="checkbox-all" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="p-4">
                      <div className="py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        {billTable.dateAndTime}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      {billTable.type}
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      {billTable.refrenceNumber}
                    </th>

                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      {billTable.amount}(MYR)
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400">
                      {billTable.action}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {receipt_list.map((x) => (
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-primary bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="p-4 w-4">
                        <div className="flex items-center">
                          <p className="py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {x.date}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {x.type}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {x.refrence_number}
                      </td>

                      <td className=" py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {x.ammount}
                      </td>
                      <td className="text-right py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {x.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
