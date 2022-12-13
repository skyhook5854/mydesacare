import React from "react";
import Link from "next/link";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
// layout for page
import Auth from "src/layouts/Auth.js";
import {
  MESSAGE_EMAIL_REQUIRED,
  MESSAGE_INVALID_EMAIL_ADDRESS,
  MESSAGE_NAME_REQUIRED,
  MESSAGE_PASSWORD_REQUIRED,
  MESSAGE_PHONE_NUMBER_REQUIRED,
} from "src/utils/ErrorMessage";
import { Spinner } from "src/components/Spinner";
import { useRouter } from "next/router";
import { useRegister } from "src/actions/customer";
import { CustomAlert } from "src/components/Alert";
import { authAtom } from "src/recoil/auth";
import { useRecoilValue } from "recoil";
import { useCompany } from "src/actions/company";

function Register(props) {
  const { mutate, isLoading, error, isError } = useRegister();
  const { data } = useCompany();

  const onSubmitRegister = async (values) => {
    try {
      let userData = {
        companyCode: data?.data[0].code,
        name: values.fullname,
        mobile: `+60${values.phoneNumber}`,
        email: values.email,
        password: values.password,
        referralCode: values.referralCode,
      };
      await mutate(userData);
    } catch ({ error }) {
      // alertMessage.showError(error);
    }
  };
  return (
    <>
      <div className="w-full flex justify-between mx-auto">
        <div className="w-full px-4 md:px-12">
          <div className="flex flex-col justify-center items-center py-10">
            <div className="logo flex justify-center items-center">
              <img src="/img/logo.svg" alt="Delyva logo" className="" />
            </div>
            <h6 className="font-bold text-2xl text-black">Create an account</h6>
            <div className="">
              <Link href="/auth/login">
                <a href="#login" className="">
                  Or{" "}
                  <small className="text-sm font-semibold text-primary">
                    Login with your account
                  </small>
                </a>
              </Link>
            </div>
          </div>
          {isError && <CustomAlert message={error.message} type="error" />}
          <div className="flex-auto bg-g lg:px-10 py-10 pt-10">
            <Formik
              enableReinitialize
              validateOnChange={false}
              validateOnBlur={false}
              initialValues={{
                fullname: "",
                phoneNumber: "",
                email: "",
                password: "abcd1234!",
                terms: false,
                referralCode: "abcd1234!",
                robot: "",
              }}
              validationSchema={Yup.object().shape({
                fullname: Yup.string().required(MESSAGE_NAME_REQUIRED),
                email: Yup.string()
                  .email(MESSAGE_INVALID_EMAIL_ADDRESS)
                  .required(MESSAGE_EMAIL_REQUIRED),
                password: Yup.string().required(MESSAGE_PASSWORD_REQUIRED),
                phoneNumber: Yup.string().required(
                  MESSAGE_PHONE_NUMBER_REQUIRED
                ),
                terms: Yup.bool().oneOf([true], "Field must be checked"),
              })}
              onSubmit={onSubmitRegister}>
              {(form) => (
                <form onSubmit={form.handleSubmit}>
                  <div className="relative w-full mb-8">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">
                      Full name
                    </label>
                    <input
                      {...form}
                      type="text"
                      name="fullname"
                      required
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Full name"
                    />
                    <ErrorMessage name="fullname" />
                  </div>

                  <div className="relative w-full mb-8">
                    <label
                      htmlFor="website-admin"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Phone number
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-3 text-sm text-gray-900 bg-gray-50 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        +60
                      </span>
                      <input
                        {...form}
                        name="phoneNumber"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        required
                        type="text"
                        className="rounded-none rounded-r-lg border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="12345678"
                      />
                      <ErrorMessage name="phoneNumber" />
                    </div>
                  </div>

                  <div className="relative w-full mb-8">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">
                      Email
                    </label>
                    <input
                      {...form}
                      name="email"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      required
                      type="email"
                      className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" />
                  </div>

                  <div className="relative w-full mb-8">
                    <label
                      className="block  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">
                      Password
                    </label>
                    <input
                      {...form}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      name="password"
                      type="password"
                      required
                      className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" />
                  </div>

                  <div className="relative w-full mb-8">
                    <label
                      className="flex items-center  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="referral-code">
                      Referral code (optional)
                      <i className="fas fa-question-circle text-blueGray-600 px-2"></i>
                    </label>
                    <input
                      {...form}
                      name="referralCode"
                      id="referralCode"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Referral code"
                    />
                  </div>

                  <div className="relative w-full mb-5">
                    <label className="inline-flex items-center cursor-pointer">
                      <Field
                        type="checkbox"
                        name="terms"
                        className={"form-check-input rounded"}
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-700">
                        I agree with the{" "}
                        <a
                          href="#"
                          className="w-full text-primary"
                          onClick={(e) => e.preventDefault()}>
                          Terms and condition
                        </a>
                      </span>
                    </label>
                  </div>

                  {/* <div className="relative w-full mb-5">
                    <div className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                      <div className="flex content-center items-center py-2">
                        <input
                          {...form}
                          id="country-option-2"
                          type="radio"
                          name="captcha"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value="captcha"
                          className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-primary dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="captcha"
                          className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          <span className="ml-2 text-sm font-semibold text-blueGray-700">
                            I’m not robot{" "}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div> */}

                  <div className="text-center mt-6">
                    {!isLoading ? (
                      <button
                        className="bg-primary text-white active:bg-blueGray-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit">
                        Create Account
                      </button>
                    ) : (
                      <div className="inline-block">
                        <Spinner />
                      </div>
                    )}
                  </div>
                </form>
              )}
            </Formik>

            <div className="rounded-t py-10">
              <div className="relative flex justify-center items-center w-full border-b border-gray-300 my-10 mb-12">
                <span className="absolute bg-white px-2">Or continue with</span>
              </div>
              <div className="btn-wrapper text-center w-full flex justify-between items-center">
                <button
                  className="w-1/2 bg-white active:bg-blueGray-50 text-blueGray-5=00 font-normal px-4 py-2 rounded-md outline-none focus:outline-none mr-2 mb-1 border hover:shadow-md inline-flex items-center justify-center text-sm ease-linear transition-all duration-150"
                  type="button">
                  <i className="fab fa-facebook text-lg mr-2"></i>
                  Facebook
                </button>
                <button
                  className="w-1/2 bg-white active:bg-blueGray-50 text-blueGray-5=00 px-4 py-2 rounded-md outline-none focus:outline-none mr-2 mb-1 border hover:shadow-md inline-flex items-center justify-center  text-sm ease-linear transition-all duration-150"
                  type="button">
                  <i className="fab fa-google text-lg mr-2"></i>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden lg:flex w-full flex-col items-center justify-center bg-indigo-100 bg-cover"
          style={{ backgroundImage: "url('/img/vector/bg-login.png')" }}>
          <img src="/img/vector/Delivered.svg" alt="Deivered " />
          <div className="py-10 w-1/2">
            <p className="text-white font-bold">
              "Delyva help to ease my business delivery process. I can focus on
              other things that really matter now."
            </p>
            <div className="text-sm py-4">
              <label htmlFor="terms" className="font-medium text-primary ">
                <a href="#" className=" hover:underline dark:text-blue-500">
                  Kartini Suhari
                </a>{" "}
                <span className="text-white">
                  - Handmade soap & Mirabelle stokist
                </span>{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
Register.layout = Auth;
