import React from "react";
import { useOnboardingHooks } from "src/hooks/translation/useOnboardingHooks";

export default function BankInfo({ form }) {
  const { cod, bankSwift, bankName, bankAccountName, bankAccountNo } =
    useOnboardingHooks();

  return (
    <>
      <a
        href="#"
        class="block p-6 w-1/2  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
          class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert">
          <span class="font-medium"></span> {cod}
        </div>
        <div class="flex flex-row">
          <div class="mb-6 m-3 w-6/12">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {bankName}
            </label>
            <input
              name="bankName"
              {...form}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.bankName}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div class="mb-6 m-3 w-6/12">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {bankSwift}
            </label>
            <input
              name="bankSwiftCode"
              {...form}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.bankSwiftCode}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-6 m-3 w-6/12">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {bankAccountNo}
            </label>
            <input
              name="bankAccountNo"
              {...form}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.bankAccountNo}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div class="mb-6 m-3 w-6/12">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {bankAccountName}
            </label>
            <input
              name="bankAccountName"
              {...form}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.bankAccountName}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
      </a>
    </>
  );
}
