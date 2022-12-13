import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";
// layout for page
import Auth from "src/layouts/Auth.js";
import {
  MESSAGE_EMAIL_REQUIRED,
  MESSAGE_INVALID_EMAIL_ADDRESS,
  MESSAGE_PASSWORD_REQUIRED,
} from "src/utils/ErrorMessage";
import { Spinner } from "src/components/Spinner";
import { useRecoilValue } from "recoil";
import { useCompany } from "src/actions/company";
import { useLogin } from "src/actions/auth";
import { CustomAlert } from "src/components/Alert";
import { useRouter } from "next/router";
import { authAtom } from "src/recoil/auth";

function Login(props) {
  const router = useRouter();
  // const { data } = useCompany();
  const { mutate, error, isError, isLoading: isButtonLoading } = useLogin();
  const auth = useRecoilValue(authAtom);
  let gg;

  const onSubmitLogin = async (values) => {
    console.log('values',values)
    await mutate(values);
  };

  useEffect(() => {
    if (auth?.data?.accessToken) {
      router.push("/dashboard");
    }
  }, [gg]);

  if (isButtonLoading) {
    <Spinner />;
  }

  return (
    <>
      <div className="h-screen flex justify-between mx-auto">
        <div className="flex w-full md:w-1/2 flex-col justify-center items-center md:px-12">
          <div className="flex flex-col justify-center items-center py-10">
            {/* <div className="logo flex justify-center items-center">
              <img src="/img/logo/MyDesaCare.svg" alt="Delyva logo" className="" />
            </div> */}
            {/* <Link href="/auth/register">
              <a href="#register" className="">
                Or{" "}
                <small className="text-sm font-semibold text-primary">
                  Create an account
                </small>
              </a>
            </Link> */}
            <h6 className="font-bold text-2xl text-black">
              MyDesa Care Team
            </h6>

          </div>
          {isError ? (
            <CustomAlert message={error.message} type={"error"} />
          ) : null}
          <div className="flex w-full items-center justify-center shadow-md rounded-xl px-4  py-10 pt-10">
            <Formik
              enableReinitialize
              validateOnChange={false}
              validateOnBlur={false}
              initialValues={{
                // companyCode: data?.data[0]?.code || null,
                email: "initVal.username",
                password: "initVal.password",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email(MESSAGE_INVALID_EMAIL_ADDRESS)
                  .required(MESSAGE_EMAIL_REQUIRED),
                password: Yup.string().required(MESSAGE_PASSWORD_REQUIRED),
              })}
              onSubmit={onSubmitLogin}>
              {(form) => (
                <form onSubmit={form.handleSubmit} className="w-full">
                  <div className="relative w-full mb-8">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">
                      Email address
                    </label>
                    <input
                      {...form}
                      name="email"
                      required
                      type="email"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                    {form.errors.name && (
                      <div id="feedback">{form.errors.name}</div>
                    )}
                  </div>

                  <div className="relative w-full mb-8">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">
                      Password
                    </label>
                    <input
                      type="password"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      name="password"
                      required
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>

                  <div className="flex w-full justify-between">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="remember"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className="form-checkbox border rounded text-blueGray-700  ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-700">
                        Remember me
                      </span>
                    </label>

                    <Link href="/auth/forgot-password">
                    <a
                      href="#forgot-password"
                      className="text-primary text-sm">
                      Forgot your password ?
                    </a>
                  </Link>

                    {/* <a className="text-primary font-semibold" href="#forgot-password" alt="" >
                    Forgot your password ?
                  </a> */}
                  </div>

                  <div className="text-center mt-6">
                    {!isButtonLoading ? (
                      <button
                        className="bg-primary text-white active:bg-blueGray-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit">
                        Login
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
            <div className="rounded-t py-10 hidden">
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
              <Link href="/auth/verify">
                <a
                  href="#register"
                  className="font-semibold text-primary text-center block mt-4">
                  <small> Verify your account</small>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hidden lg:flex w-1/2 flex-col items-center justify-center bg-indigo-100 bg-cover"
          style={{ backgroundImage: "url('/img/vector/bg-login.png')" }}>
          <img src="/img/logo/MyDesaCareVector-white.svg" alt="Deivered " />
          <div className="py-10 w-1/2 text-center">
            <p className="text-white font-bold">
              "Consultation and Teaming: Problem Solving among Educators, Parents,
              and Support Personnel ."
            </p>
            {/* <div className="text-sm py-4">
              <label htmlFor="terms" className="font-medium text-primary ">
                <a href="#" className=" hover:underline dark:text-blue-500">
                  Kartini Suhari
                </a>{" "}
                <span className="text-white">
                  - Handmade soap & Mirabelle stokist
                </span>{" "}
              </label>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

// export async function getServerSideProps() {

// }

// export async function getServerSideProps() {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["companyInfo", null], () =>
//     getCompanyInfo()
//   );
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

export default Login;
Login.layout = Auth;
