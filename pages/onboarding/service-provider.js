import { ToggleButton } from "src/components/Onboarding/toggle-button";
import { labelType } from "src/data/onboarding";
import React, { useState } from "react";
import { useOnboardingHooks } from "src/hooks/translation/useOnboardingHooks";
import {
  useAvailableServiceCompanyId,
  useServiceCompanies,
} from "src/actions/company";
import { FullPageSpinner } from "src/components/Spinner/fullPageSpinner";

export default function ServiceProvider({ form, companyList, setCompanyList }) {
  const {
    labelSize,
    selectProvider,
    selectAllProviders,
    providerSelected,
    providerTotal,
  } = useOnboardingHooks();
  const [q, setQ] = useState("");
  const serviceCompanies = useServiceCompanies();
  const availableServiceCompanyId = useAvailableServiceCompanyId();
  const availableServiceCompany = serviceCompanies.data?.data?.filter((x) =>
    availableServiceCompanyId.data?.data.includes(x.id)
  );

  if (serviceCompanies.isLoading && availableServiceCompanyId.isLoading)
    return <FullPageSpinner />;

  const filterArr = (value) => {
    let found = companyList.includes(value);
    if (found) {
      const index = companyList.indexOf(value);
      if (index > -1) {
        companyList.splice(index, 1); // 2nd parameter means remove one item only
      }
      return true;
    }
    return false;
  };

  const addToList = ({ target }) => {
    let canPush = filterArr(target.value);
    if (!canPush) companyList.push(target.value);
    setCompanyList(companyList);
  };

  return (
    <>
      <a
        href="#"
        class="block p-6 md:w-1/2 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="container md:mx-auto">
          <div class="mb-6">
            <label
              htmlFor="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              {labelSize}
            </label>
            <select
              name="defaultLabelType"
              {...form}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.defaultLabelType}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {labelType.map((label) => {
                return <option>{label}</option>;
              })}
            </select>
          </div>
          <hr class="mt-2 h-5"></hr>
          <div class="text-black">{selectProvider}</div>
          <div class="text-xs">
            {availableServiceCompany?.length} {providerTotal}
          </div>

          <div class="relative mt-4">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              onChange={(e) => setQ(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
          <div class="text-xs mt-2 flex-1 ">
            {companyList.length} {providerSelected}
          </div>
          {/* <div class="flex flex-row">
            <div class="text-xs mt-2 flex-1 ">2 {providerSelected}</div>
            <div class="text-xs mt-2 text-blue-700 justify-end flex-0.3">
              {selectAllProviders}
            </div>
          </div> */}
          <div
            style={{ height: "20em" }}
            class="mt-6 overflow-scroll text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {availableServiceCompany
              ?.filter((x) => x.name?.toLowerCase().includes(q))
              .map((x) => (
                <ToggleButton
                  key={x.name}
                  companyList={companyList}
                  onChange={addToList}
                  {...x}
                />
              ))}
          </div>
        </div>
      </a>
    </>
  );
}
