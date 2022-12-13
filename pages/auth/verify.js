import React from "react";
import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";
import { useVerify } from "src/actions/auth";
import { CustomAlert } from "src/components/Alert";
import { Spinner } from "src/components/Spinner";
import { useCompany } from "src/actions/company";

export default function Verify() {
  const { mutate, isLoading, error, isError } = useVerify();

  //check if url contains username,code,companyId
  //if yes, verify it automatically
  const { data: companyDetails } = useCompany();

  const onSubmitVerify = async (val) => {
    await mutate({ companyId: companyDetails?.data[0]?.id, ...val });
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="forgot-password bg-blue-50 flex justify-center items-center h-screen flex-col">
        {isError && <CustomAlert type={"error"} message={error.message} />}
        <div className="flex flex-col justify-center items-center py-10">
          <Link href="/auth/login">
            <a href="#login" className="flex items-center py-18">
              <span className="text-primary px-2 font-extrabold">
                <svg
                  className="w-6 h-6"
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
              </span>
              <p className="text-md font-semibold text-primary">Back</p>
            </a>
          </Link>

          <div className="flex flex-col items-center justify-center py-10">
            <h6 className="font-bold text-4xl text-black py-6">Enter code</h6>
            <span className=" text-center">
              A verification code has been sent to you via email/sms
            </span>
          </div>
        </div>

        <div className="md:w-1/2 bg-white rounded-lg border border-gray-200 shadow-md ">
          <Formik
            enableReinitialize
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              username: null,
              code: null,
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string()
                .nullable()
                .required("Username / Email / Phone number is required"),
              code: Yup.string()
                .nullable()
                .required("Verification code is required"),
            })}
            onSubmit={onSubmitVerify}>
            {(form) => (
              <form onSubmit={form.handleSubmit} className="px-12 py-12">
                <div className="relative w-full mb-8 ">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="verify">
                    Username / Email / Phone Number
                  </label>
                  <input
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="username"
                    required
                    className="border border-gray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="tes / test@gmail.com / +60191111111"
                  />
                </div>
                <div className="relative w-full mb-8 ">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="verify">
                    Enter code
                  </label>
                  <input
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="code"
                    required
                    className="border border-gray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="code"
                  />
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-primary text-white active:bg-blueGray-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit">
                    Verify
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div className="flex items-center justify-center relative w-full py-10">
          <label className="inline-flex items-center cursor-pointer">
            <span className="ml-2 text-sm">
              Didn’t receive email/sms? {""}
              <a
                href="#terms"
                className="text-primary"
                onClick={(e) => e.preventDefault()}>
                Resend in 0:47
              </a>
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
