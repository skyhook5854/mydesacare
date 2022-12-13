import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useResetPassword } from "src/actions/auth";
import { CustomAlert } from "src/components/Alert";
import { useCompany } from "src/actions/company";
import Link from "next/link";

export default function ResetPassword() {
  const router = useRouter();
  const { mutate, isError, error, isSuccess } = useResetPassword();
  const { code = "", email = "", companyId = null } = router.query;
  const showAllField = !email && !code;
  const { data: companyDetails } = useCompany();

  const onResetPassword = async (val) => {
    await mutate({
      companyId: companyId ?? companyDetails?.data[0]?.id,
      ...val,
    });
  };

  return (
    <>
      <div className="forgot-password bg-blue-50 flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center py-10">
          <div className="flex flex-col items-center justify-center py-10">
            {isError && <CustomAlert type={"error"} message={error.message} />}
            {isSuccess && (
              <CustomAlert
                type={"success"}
                message={
                  "Password has been reset successfully. Please login with your new password."
                }
              />
            )}
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
                <p className="text-md font-semibold text-primary">
                  Back to sign in page
                </p>
              </a>
            </Link>

            <h6 className="font-bold text-4xl text-black py-6">
              Reset password ?
            </h6>
            <span className=" text-center">
              Your new password must be different from your previous password.
            </span>
          </div>
        </div>

        <div className="md:w-1/2 bg-white rounded-lg border border-gray-200 shadow-md ">
          <Formik
            enableReinitialize
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              email,
              code,
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().nullable().required("Email"),
            })}
            onSubmit={onResetPassword}>
            {(form) => (
              <form className="px-12 py-12" onSubmit={form.handleSubmit}>
                {showAllField && (
                  <div className="relative w-full mb-8 ">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">
                      Email
                    </label>
                    <input
                      type="email"
                      {...form}
                      name="email"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Enter email address"
                    />
                  </div>
                )}
                {showAllField && (
                  <div className="relative w-full mb-8 ">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">
                      Code
                    </label>
                    <input
                      type="text"
                      {...form}
                      name="code"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Enter code"
                    />
                  </div>
                )}
                <div className="relative w-full mb-8 ">
                  <label
                    className="block text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    New password
                  </label>
                  <input
                    type="password"
                    {...form}
                    name="password"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="New password"
                  />
                </div>
                {/* <div className="relative w-full mb-8 ">
                  <label
                    className="block text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Re-enter new password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Confirm your password"
                  />
                </div> */}

                <div className="text-center mt-6">
                  <button
                    className="bg-primary text-white active:bg-blueGray-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit">
                    Reset password
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
