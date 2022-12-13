import React from "react";
import { useQueryClient } from "react-query";

export default function SelectPayment() {
  const queryClient = useQueryClient();
  const paymentMethod = queryClient.getQueryData(["paymentMethod"])

  return (
    <>
      {/* <div>select-payment</div> */}
      <div className="hidden w-full flex-col md:flex items-center py-4 md:px-10">
        <ul className="w-full md:flex px-4">
          {paymentMethod ? Object.entries(paymentMethod?.data).map(([key, value]) => (
            <li className="flex justify-center items-center w-full h-52 rounded-md hover:shadow border border-gray-300 m-2">
              <a className=" md:flex justify-center items-center flex-col md:px-5 gap-2 py-10 text-sm text-center hover:text-primary">
                <i className={`fas fa-${value.fontAwesomeIcon} text-4xl px-4 md:px-0`}></i>
                <span className="text-gray-500">{value.name}</span>
              </a>
            </li>
          )) : ""}
          {/* <li className="flex justify-center items-center w-full h-52 rounded-md hover:shadow border border-gray-300 m-2">
            <a className=" md:flex justify-center items-center flex-col md:px-10 gap-2 py-10 text-sm text-center hover:text-primary">
              <i className="fas fa-credit-card text-4xl px-4 md:px-0 "></i>
              <span className="text-gray-500">Credit/debit card</span>
            </a>
          </li>
          <li className="flex justify-center items-center w-full h-52 rounded-md hover:shadow border border-gray-300 m-2">
            <a className="md:flex justify-center items-center flex-col md:px-10 gap-2 py-10 text-sm text-center hover:text-primary">
              <i className="fas fa-desktop text-4xl px-4 md:px-0 "></i>
              <span className="text-gray-500">Online Payment</span>
            </a>
          </li>
          <li className="flex justify-center items-center w-full h-52 rounded-md hover:shadow border border-gray-300 m-2">
            <a className="md:flex justify-center items-center flex-col md:px-10 gap-2 py-10 text-sm text-center hover:text-primary">
              <i className="fas fa-mobile text-4xl px-4 md:px-0 "></i>
              <span className="text-gray-500">eWallet</span>
            </a>
          </li>
          <li className="flex justify-center items-center w-full h-52 rounded-md hover:shadow border border-gray-300 m-2">
            <a className="md:flex justify-center items-center flex-col md:px-10 gap-2 py-10 text-sm text-center hover:text-primary">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-500">Bank Transfer/Cheque</span>
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
}
