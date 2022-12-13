import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import data
import { notification_list } from "src/data/notification";

import { Formik, Form, Field } from "formik";

// layout for page
import Admin from "src/layouts/Admin.js";

export default function Notification() {
  const { t: t1 } = useTranslation("notification");
  const router = useRouter();

  const selectAllData = notification_list.map((checkbox) => checkbox.value);
  return (
    <>
      <div className="px-4 md:px-10 mx-auto w-full min-h-screen">
        {/* Notification List */}
        <div className="bg-white rounded-md ">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="overflow-hidden sm:rounded-lg">
                <Formik
                  initialValues={{ noti: [], selectAll: false }}
                  onSubmit={(values) => console.log(values)}>
                  {({ values, setFieldValue }) => (
                    <Form>
                      <button
                        className="hidden"
                        type="button"
                        onClick={() => {
                          setFieldValue("noti", selectAllData);
                        }}>
                        {/* asdas */}
                      </button>
                      <div>
                        <label className="flex items-center gap-6 border-b py-4">
                          <Field
                            onChange={() => {
                              if (!values.selectAll) {
                                setFieldValue("noti", selectAllData);
                              } else {
                                setFieldValue("noti", []);
                              }
                              setFieldValue("selectAll", !values.selectAll);
                            }}
                            checked={values.selectAll}
                            type="checkbox"
                            name="selectAll"
                            className="ml-4 flex rounded"
                          />{" "}
                          <div class="grid grid-cols-2 divide-x gap-6">
                            <div class="flex items-center gap-2 ">
                              <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path>
                              </svg>
                              Mark as read
                            </div>
                            <div class="flex items-center gap-2 md:px-6">
                              <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                              </svg>
                              <span>Delete</span>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="">
                        {notification_list.map((x) => (
                          <div
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 py-4"
                            key={x.value}>
                            <label className="inline-flex items-center gap-6 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <Field
                                type="checkbox"
                                name="noti"
                                value={x.name}
                                className="rounded "
                              />{" "}
                              <Link href={x.links}>{x.name}</Link>
                            </label>
                          </div>
                        ))}
                      </div>
                      <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Notification.layout = Admin;
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "homepage",
        "pageWrapper",
        "notification",
      ])),
    },
  };
}
