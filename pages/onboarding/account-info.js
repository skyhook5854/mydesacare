import { account_type } from "src/data/onboarding";
import React from "react";
import { useOnboardingHooks } from "src/hooks/translation/useOnboardingHooks";
import { ErrorMessage } from "formik";
import { FormErrorMessage } from "src/components/FormErrorMessage";
import { useCustomerType, useIndustryType } from "src/actions/common";

export default function AccountInfo({ form }) {
  const industryType = useIndustryType();
  const customerType = useCustomerType();
  const t = useOnboardingHooks();
  const {
    photo,
    recomSize,
    suppFileFormat,
    website,
    upload,
    bizName,
    bizRegNo,
    bizIndustry,
    dob,
    bizType,
  } = t;
  return (
    <>
      <div className="block p-6 max-w-screen-xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <fieldset className="w-96">
          {customerType.data &&
            Object.keys(customerType.data?.data).map((x) => (
              <div key={x} className="flex items-center mb-4">
                <input
                  type="radio"
                  name="type"
                  value={x}
                  checked={form.values.type === x}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-primary dark:bg-gray-700 dark:border-gray-600"
                  aria-labelledby="country-option-1"
                  aria-describedby="country-option-1"
                  {...form}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <label
                  htmlFor="country-option-1"
                  className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t[x.toLowerCase()]}
                </label>
              </div>
            ))}
          <hr className="mt-2 h-5"></hr>
          <p className="mb-4">{photo}</p>
          <div className="flex flex-row items-center mb-5">
            <img
              className="w-12 h-12 rounded-full shadow-lg"
              src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
            />
            <button className="border-2 ml-6 j h-9 w-1/3 inline-flex justify-center align-middle content-center  py-2 px-3 text-sm font-medium text-center text-white bg-white rounded-lg hover:bg-blue-800 focus:ring-4 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
              <p className="text-center text-black">{upload}</p>
            </button>
            <div className="col-auto  ml-6 ">
              <p className="text-xs">{recomSize}: 200x200px</p>
              <p className="text-xs">{suppFileFormat}: JPG,PNG or GIF</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mb-6 m-3 w-6/12">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {bizName}
              </label>
              <input
                name="name"
                value={form.values.name}
                {...form}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
              <ErrorMessage name="name" component={FormErrorMessage} />
            </div>
            <div className="mb-6  m-3 w-6/12">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {bizRegNo}
              </label>
              <input
                name="identityNo"
                {...form}
                onChange={form.handleChange}
                value={form.values.identityNo}
                onBlur={form.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <ErrorMessage name="identityNo" component={FormErrorMessage} />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mb-6 m-3 w-6/12">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                {bizType}
              </label>
              <select
                value={form.values.bizType}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
              <ErrorMessage name="bizType" component={FormErrorMessage} />
            </div>
            <div className="mb-6 m-3 w-6/12">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                {bizIndustry}
              </label>
              <select
                name="industry"
                {...form}
                value={form.values.industry}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {industryType.data &&
                  industryType.data?.data?.map((x) => {
                    return <option key={x}>{x}</option>;
                  })}
              </select>
              <ErrorMessage name="industry" component={FormErrorMessage} />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mb-6 m-3 w-6/12">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {dob}
              </label>
              <input
                type="date"
                name="dob"
                {...form}
                value={form.values.dob}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
              <ErrorMessage name="dob" component={FormErrorMessage} />
            </div>
            <div className="mb-6  m-3 w-6/12">
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {website}
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  http://
                </span>
                <input
                  name="websiteUrl"
                  {...form}
                  value={form.values.websiteUrl}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bonnie Green"
                />
                <ErrorMessage name="websiteUrl" component={FormErrorMessage} />
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
}
