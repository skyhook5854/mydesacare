import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  getCompanyAppUrl,
  useCompany,
  useCompanyAppUrl,
} from "src/actions/company";
import { useCustomerInfo } from "src/actions/customer";
import { CustomAlert } from "src/components/Alert";
import { Spinner } from "src/components/Spinner";
import { authAtom } from "src/recoil/auth";

function Welcome() {
  const { data, isError, error } = useCompanyAppUrl();
  const { data: companyDetails } = useCompany();
  const { data: customerInfo } = useCustomerInfo();
  console.log("customerInfo", customerInfo);
  const auth = useRecoilValue(authAtom);
  const router = useRouter();
  if (data && !data?.web_url) {
    router.push(`/`);
    return <div></div>;
  } else if (data?.web_url) {
    return (
      <div className="h-screen justify-center  items-center flex flex-col bg-blue-50">
        {isError && <CustomAlert type={"error"} message={error.message} />}
        <h3 className="text-xl text-black font-bold">Welcome to Delyva!</h3>
        <p className="m-10">Let's get started!</p>
        <div className="mt-10"></div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <button
            onClick={
              data?.web_url === "default"
                ? () => router.push(`/`)
                : () =>
                    window.open(
                      data?.web_url +
                        `?token=${auth?.data?.accessToken}&company_id=${companyDetails.id}&user_id=${auth?.data?.userId}&customer_id=${customerInfo?.data?.id}`
                    )
            }
            className="flex flex-col justify-center items-center gap-2 p-6 max-w-sm text-center  bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-64">
            {/* <i className="fas fa-arrow-circle-right text-center text-primary text-6xl mt-4"></i> */}
            <svg
              className="w-14 h-14 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-semibold text-black dark:text-gray-400 mt-3">
              Web Portal
            </p>
          </button>

          <button
            onClick={() => {
              window.open(data?.android_url);
            }}
            class="flex flex-col justify-center items-center gap-2 p-6 max-w-sm text-center  bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-64">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
              className="h-14 w-14 text-center inline-block"></img>
            <p className="font-semibold text-black dark:text-gray-400 mt-2">
              via Android
            </p>
          </button>

          <button
            onClick={() => {
              window.open(data?.iphone_url);
            }}
            className="flex flex-col justify-center items-center gap-2 p-6 max-w-sm text-center  bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-64">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              className="h-14 w-14 text-center inline-block"></img>
            <p className="font-semibold text-black dark:text-gray-400 mt-2">
              via iOS
            </p>
          </button>
        </div>
      </div>
    );
  } else {
    return <div>mama</div>;
  }
}

// export async function getStaticProps() {
//   const posts = await getCompanyAppUrl();
//   return { props: { posts } };
// }

export default Welcome;
