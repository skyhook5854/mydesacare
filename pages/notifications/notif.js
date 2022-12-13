import React from "react";
import Admin from "src/layouts/Admin";
import Link from "next/link";
export default function Notif() {
  return (
    <>
      <div className="px-4 md:px-10 mx-auto w-full min-h-screen">
        <div className="bg-white rounded-md ">
          <div className="flex justify-between px-6 py-4 font-normal border-b">
            <Link href="/notifications">
              <a className="inline-flex items-center">
                <svg
                  className="w-10 h-10 pr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Back</span>
              </a>
            </Link>
            <div className="flex justify-between divide-x gap-6">
              <span className="inline-flex items-center">
                <svg
                  className="w-10 h-10 pr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
                Mark as read
              </span>
              <span className="inline-flex items-center px-4">
                <svg
                  className="w-10 h-10 pr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center py-10 px-12">
            <h4 className="text-4xl font-bold">
              We’ve launched a fresh look for our web portal
            </h4>
            <small className="text-sm font-normal">1st February 2022</small>
            <div className="rounded-xl bg-gray-100 w-full my-8 py-40"></div>
            <p className="mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,{" "}
            </p>
            <p>
              Remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button className="w-1/2 h-10 mt-4  justify-center py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
              <p className="text-center">CTA if needed</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Notif.layout = Admin;
