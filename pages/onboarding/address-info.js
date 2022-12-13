import React from "react";
import { useCountries } from "src/actions/common";
import { FullPageSpinner } from "src/components/Spinner/fullPageSpinner";
import { useOnboardingHooks } from "src/hooks/translation/useOnboardingHooks";

export default function AddressInfo({ form }) {
  const t = useOnboardingHooks();
  const {
    unitNumber,
    address,
    countryRegion,
    email,
    city,
    state,
    district,
    zip,
  } = t;
  const { data, isLoading, isError } = useCountries();
  if (isLoading) return <FullPageSpinner />;
  return (
    <>
      <a
        href="#"
        class="block p-6 w-max  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex flex-row">
          <div class="mb-6 m-3 w-6/12">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {unitNumber}
            </label>
            <input
              name="address1"
              {...form}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.address1}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div class="mb-6 m-3 w-6/12">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {email}
            </label>
            <input
              name="email"
              type={"email"}
              {...form}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
        <div class="mb-6  m-3 w-12/12">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {address}
          </label>
          <input
            name="address2"
            {...form}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.address2}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex flex-row">
          <div class="mb-6 m-3 w-6/12">
            <label
              htmlFor="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              {countryRegion}
            </label>
            <select
              name="country"
              {...form}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.country}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {data.data.map((x) => {
                return <option value={x.countryCode}>{x.name}</option>;
              })}
            </select>
          </div>
          <div class="mb-6 m-3 w-6/12">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {city}
            </label>
            <input
              name="city"
              {...form}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.city}
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
              {state}
            </label>
            <input
              name="state"
              {...form}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.state}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div class="mb-6 m-3 w-6/12">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {district}
            </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
          <div class="mb-6 m-3 w-6/12">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {zip}
            </label>
            <input
              name="postcode"
              {...form}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.postcode}
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
