import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Security() {
  const { t: t1 } = useTranslation("settings");
  return (
    <>
      <div className="Security">
        <h3 className="flex items-center justify-center py-10 text-black font-bold text-4xl">
          {t1("content.security.title")}
        </h3>
        <fieldset className="">
          <form>
            <div className="flex flex-row">
              <div className="mb-6 m-3 w-6/12 mx-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t1("content.email")}
                </label>
                <p>
                  {t1("content.changeEmailAddress.currentEmail")}:{" "}
                  <b>muhammad@mail.com</b>
                </p>
                <p></p>
              </div>
              <div className="mb-6 m-3 w-6/12 mx-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t1("content.newEmail")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mb-6 m-3 w-6/12 mx-4">
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t1("content.phoneNumber")}
                </label>
                <p>
                  {t1("content.changePhoneNo.currentPhoneNo")}:{" "}
                  <b>+60123456789</b>
                </p>
                <p></p>
              </div>
              <div className="mb-6 m-3 w-6/12 mx-4">
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t1("content.newPhoneNumber")}
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="New phone number"
                />
              </div>
            </div>
            <div className="flex flex-row mb-6 m-3 w-6/12 mx-4">
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {t1("content.password")}
              </label>
            </div>
            <div className="flex flex-row">
              <div className="mb-6 m-3 w-6/12 mx-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t1("content.changePassword.currentPassword")}
                </label>
                <input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Current password"
                  required
                />
              </div>
              <div className="mb-6 m-3 w-6/12 mx-4">
                <label
                  htmlFor="password "
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t1("content.changePassword.newPassword")}
                </label>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="New password"
                />
              </div>
            </div>

            <div className="flex">
              <button className="w-full h-10 mt-4  m-2 justify-center  py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                <p className="text-center">{t1("content.save")}</p>
              </button>
            </div>
          </form>
        </fieldset>
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
