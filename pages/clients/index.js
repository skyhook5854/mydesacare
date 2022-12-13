/* eslint-disable react/jsx-no-target-blank */
import Admin from "src/layouts/Admin";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

export default function Clients() {
  return (
    <>
      <div className="px-4 md:px-10 mx-auto w-full min-h-screen">
        <div className="grid grid-cols-4">
          <div className="bg-white rounded-2xl border-3 border-gray-300 m-2">
            <div
              class="flex items-center space-x-4 p-6 bg-bottom bg-repeat-x"
              style={{
                backgroundSize: "10px 2px",
                backgroundImage:
                  "linear-gradient(to right, gray 33%, rgba(255,255,255,0) 0%)",
              }}>
              <img
                class="w-10 h-10 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/1430/1430453.png"
                alt=""
              />
              <div class="space-y-1 font-medium">
                <div>Syakir Zulpadhli</div>
                <div class="text-sm text-gray-500">Anxiety</div>
                <div class="text-sm text-purple-500">
                  Euclidean Distance: 1.453
                </div>
              </div>
            </div>
            <div className="flex justify-evenly items-center my-4">
              <Link
                href={{
                  pathname: "/clients/details",
                  query: 1, // the data
                }}>
                <a className="rounded-2xl font-semibold text-md border border-yellow-300 p-2 px-4">
                  <i className="fas fa-angle-right mr-2"></i>
                  View
                </a>
              </Link>
              <span>
                <button
                  type="button"
                  className="rounded-2xl font-semibold text-md bg-green-400 p-2 px-4">
                  <i className="fas fa-check mr-2"></i>
                  Accept
                </button>
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border-3 border-gray-300 m-2">
            <div
              class="flex items-center space-x-4 p-6 bg-bottom bg-repeat-x"
              style={{
                backgroundSize: "10px 2px",
                backgroundImage:
                  "linear-gradient(to right, gray 33%, rgba(255,255,255,0) 0%)",
              }}>
              <img
                class="w-10 h-10 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/1430/1430453.png"
                alt=""
              />
              <div class="space-y-1 font-medium">
                <div>Syakir Zulpadhli</div>
                <div class="text-sm text-gray-500">Anxiety</div>
                <div class="text-sm text-purple-500">
                  Euclidean Distance: 1.453
                </div>
              </div>
            </div>
            <div className="flex justify-evenly items-center my-4">
              <Link
                href={{
                  pathname: "/clients/details",
                  query: 1, // the data
                }}>
                <a className="rounded-2xl font-semibold text-md border border-yellow-300 p-2 px-4">
                  <i className="fas fa-angle-right mr-2"></i>
                  View
                </a>
              </Link>
              <span>
                <button
                  type="button"
                  className="rounded-2xl font-semibold text-md bg-green-400 p-2 px-4">
                  <i className="fas fa-check mr-2"></i>
                  Accept
                </button>
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border-3 border-gray-300 m-2">
            <div
              class="flex items-center space-x-4 p-6 bg-bottom bg-repeat-x"
              style={{
                backgroundSize: "10px 2px",
                backgroundImage:
                  "linear-gradient(to right, gray 33%, rgba(255,255,255,0) 0%)",
              }}>
              <img
                class="w-10 h-10 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/1430/1430453.png"
                alt=""
              />
              <div class="space-y-1 font-medium">
                <div>Syakir Zulpadhli</div>
                <div class="text-sm text-gray-500">Anxiety</div>
                <div class="text-sm text-purple-500">
                  Euclidean Distance: 1.453
                </div>
              </div>
            </div>
            <div className="flex justify-evenly items-center my-4">
              <Link
                href={{
                  pathname: "/clients/details",
                  query: 1, // the data
                }}>
                <a className="rounded-2xl font-semibold text-md border border-yellow-300 p-2 px-4">
                  <i className="fas fa-angle-right mr-2"></i>
                  View
                </a>
              </Link>
              <span>
                <button
                  type="button"
                  className="rounded-2xl font-semibold text-md bg-green-400 p-2 px-4">
                  <i className="fas fa-check mr-2"></i>
                  Accept
                </button>
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border-3 border-gray-300 m-2">
            <div
              class="flex items-center space-x-4 p-6 bg-bottom bg-repeat-x"
              style={{
                backgroundSize: "10px 2px",
                backgroundImage:
                  "linear-gradient(to right, gray 33%, rgba(255,255,255,0) 0%)",
              }}>
              <img
                class="w-10 h-10 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/1430/1430453.png"
                alt=""
              />
              <div class="space-y-1 font-medium">
                <div>Syakir Zulpadhli</div>
                <div class="text-sm text-gray-500">Anxiety</div>
                <div class="text-sm text-purple-500">
                  Euclidean Distance: 1.453
                </div>
              </div>
            </div>
            <div className="flex justify-evenly items-center my-4">
              <Link
                href={{
                  pathname: "/clients/details",
                  query: 1, // the data
                }}>
                <a className="rounded-2xl font-semibold text-md border border-yellow-300 p-2 px-4">
                  <i className="fas fa-angle-right mr-2"></i>
                  View
                </a>
              </Link>
              <span>
                <button
                  type="button"
                  className="rounded-2xl font-semibold text-md bg-green-400 p-2 px-4">
                  <i className="fas fa-check mr-2"></i>
                  Accept
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Clients.layout = Admin;
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
      ])),
    },
  };
}
