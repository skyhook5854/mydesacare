// import { language_options } from "src/data/onboarding";
import language_options from "../../src/data/langArr.json";
import React, { useEffect, useState } from "react";
import AccountInfo from "./account-info";
import AddressInfo from "./address-info";
import BankInfo from "./bank-info";
import BillingInfo from "./billing-info";
import ServiceProvider from "./service-provider";
import { useRecoilState, useRecoilValue } from "recoil";
import { languageAtom } from "src/recoil/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useOnboardingHooks } from "src/hooks/translation/useOnboardingHooks";
import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { useCustomerInfo, useUpdateCustomer } from "src/actions/customer";
import { Spinner } from "src/components/Spinner";
import { CustomAlert } from "src/components/Alert";
import { FullPageSpinner } from "src/components/Spinner/fullPageSpinner";

export default function Onboarding() {
  const router = useRouter();
  const {
    onboardingStep,
    accountInfo,
    addressInfo,
    billingInfo,
    serviceProviders,
    bankInfo,
    skip,
    next,
    confirm,
    back,
    proceed,
    selectLanguage,
  } = useOnboardingHooks();
  const { pathname, asPath, query, defaultLocale, locale } = router;
  const [lang, setLangVal] = useRecoilState(languageAtom);
  const [page, setPage] = useState(0);
  const customerDetails = useCustomerInfo();
  const { mutateAsync, isLoading, error, isError } = useUpdateCustomer();
  const checkDob =
    customerDetails.data?.data?.dob?.length > 0 &&
    customerDetails.data.data.dob;
  const newDob = new Date(checkDob);
  const dateFormat = "yyyy-MM-DD";
  const formattedDate = moment(newDob, dateFormat).format(dateFormat);
  const [companyList, setCompanyList] = useState([]);

  // check if user got selectedServices array

  //use to import dynamic translated word
  useEffect(() => {
    if (customerDetails.data?.data?.selectedServices?.length > 0) {
      setCompanyList(customerDetails.data?.data?.selectedServices);
    }
    if (locale !== defaultLocale) {
      //temp hack
      setPage(1);
      // setPage(5);
    }
  }, []);

  const renderLocale = () => {
    switch (lang) {
      case "English (US)":
        return "en";
      case "Chinese (simplified)":
        return "cn";
      case "Indonesian":
        return "id";
      case "Malay":
        return "my";
      default:
        break;
    }
  };
  const onProceed = () => {
    if (renderLocale() !== defaultLocale) {
      router.push({ pathname, query }, asPath, { locale: renderLocale() });
    }
    setPage(1);
  };
  function renderHeader() {
    switch (page) {
      case 0:
        return selectLanguage;
      case 1:
        return accountInfo;
      case 2:
        return addressInfo;
      case 3:
        return billingInfo;
      case 4:
        return bankInfo;
      case 5:
        return serviceProviders;
      default:
        break;
    }
  }

  const onSubmit = async (values) => {
    switch (page) {
      case 1:
        {
          const dobToSubmit = moment(values.dob, "DD-MM-YYYY").format(
            "YYYY-MM-DD"
          );
          const customerData = {
            type: values.type,
            name: values.name,
            identityNo: values.identityNo,
            industry: values.industry,
            dob: dobToSubmit,
            websiteUrl: values.websiteUrl,
            id: customerDetails.data?.data?.id,
            companyId: customerDetails.data?.data?.companyId,
          };
          try {
            await mutateAsync(customerData);
            setPage(page + 1);
          } catch (error) {
            console.log(error);
          }
        }
        break;
      case 2:
        {
          const addressInfo = {
            address1: values.address1,
            address2: values.address2,
            city: values.city,
            country: values.country,
            state: values.state,
            postcode: values.postcode,
            id: customerDetails.data?.data?.id,
            companyId: customerDetails.data?.data?.companyId,
          };
          try {
            await mutateAsync(addressInfo);
            setPage(page + 1);
          } catch (error) {
            console.log(error);
          }
        }
        break;
      case 3:
        {
          const {
            sameAsAddress,
            address1 = "",
            address2 = "",
            city = "",
            country = "",
            postcode = "",
            state = "",
            email = "",
          } = values;
          const { billing = {} } = { ...values };
          const billingInfo = {
            billing: sameAsAddress
              ? {
                  address1,
                  address2,
                  city,
                  country,
                  postcode,
                  state,
                  email,
                }
              : billing,
            id: customerDetails.data?.data?.id,
            companyId: customerDetails.data?.data?.companyId,
          };
          try {
            await mutateAsync(billingInfo);
            setPage(page + 1);
          } catch (error) {
            console.log(error);
          }
        }
        break;
      case 4: {
        const { bankName, bankSwiftCode, bankAccountNo, bankAccountName } =
          values;
        const addressInfo = {
          id: customerDetails.data?.data?.id,
          companyId: customerDetails.data?.data?.companyId,
          customerBankDetails: [
            {
              accountName: bankAccountName,
              bankName,
              bankSwiftCode,
              accountNumber: bankAccountNo,
            },
          ],
        };
        try {
          await mutateAsync(addressInfo);
          setPage(page + 1);
        } catch (error) {
          console.log(error);
        }
        break;
      }
      case 5: {
        try {
          const serviceProviderInfo = {
            id: customerDetails.data?.data?.id,
            companyId: customerDetails.data?.data?.companyId,
            defaultLabelType: values.defaultLabelType,
            selectedServices: companyList,
          };
          await mutateAsync(serviceProviderInfo);
          router.push("/");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  if (customerDetails.isLoading) return <FullPageSpinner />;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          type: customerDetails.data.data.type,
          name: customerDetails.data.data.name,
          identityNo: customerDetails.data.data.identityNo,
          industry: customerDetails.data.data.industry,
          dob: formattedDate,
          websiteUrl: customerDetails.data.data.websiteUrl,
          address1: customerDetails.data.data.address1,
          address2: customerDetails.data.data.address2,
          city: customerDetails.data.data.city,
          country: customerDetails.data.data.country,
          state: customerDetails.data.data.state,
          postcode: customerDetails.data.data.postcode,
          billing: customerDetails.data.data.billing,
          sameAsAddress: false,
          bankName: customerDetails.data.data.customerBankDetails[0]?.bankName,
          bankSwiftCode:
            customerDetails.data.data.customerBankDetails[0]?.bankSwiftCode,
          bankAccountNo:
            customerDetails.data.data.customerBankDetails[0]?.accountNumber,
          bankAccountName:
            customerDetails.data.data.customerBankDetails[0]?.accountName,
          defaultLabelType:
            customerDetails.data.data.defaultLabelType || "A4-3",
        }}
        validationSchema={Yup.object().shape({
          type: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          dob: Yup.string().required("Required"),
          websiteUrl: Yup.string().nullable(),
          industry: Yup.string().required("Required"),
          identityNo: Yup.string().required("Required"),
          address1: Yup.string().required("Required"),
          address2: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          country: Yup.string().required("Required"),
          state: Yup.string().required("Required"),
          postcode: Yup.string().required("Required"),
        })}
        onSubmit={onSubmit}>
        {(form) => (
          <form onSubmit={form.handleSubmit}>
            <div className="flex flex-1 items-center justify-center flex-col h-screen overflow-y-scroll">
              {isError && (
                <CustomAlert type={"error"} message={error.message} />
              )}
              <p className="text-blue-700">
                {page + 1}/6 {onboardingStep}
              </p>
              <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {renderHeader()}
              </h5>

              {page === 0 && (
                <div
                  href="#"
                  className="block p-6 w-max  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className="w-80">
                    <fieldset onChange={(e) => setLangVal(e.target.value)}>
                      <legend className="sr-only">Countries</legend>
                      {language_options.map((x) => (
                        <div className="flex items-center mb-4" key={x.label}>
                          <input
                            id="country-option-1"
                            type="radio"
                            checked={x.label === lang}
                            name="countries"
                            value={x.label}
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-primary dark:bg-gray-700 dark:border-gray-600"
                            aria-labelledby="country-option-1"
                            aria-describedby="country-option-1"
                          />
                          <label
                            htmlFor="country-option-1"
                            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {x.label}
                          </label>
                        </div>
                      ))}
                      <button
                        onClick={onProceed}
                        className="inline-flex w-full  justify-center  py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                        <p className="text-center">{proceed}</p>
                      </button>
                      <button
                        onClick={() => router.push("/")}
                        className="mt-4 border-2 justify-center inline-flex w-full  py-2 px-3 text-sm font-medium text-center text-white bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                        <p className="text-center text-black">{skip}</p>
                      </button>
                    </fieldset>
                  </div>
                </div>
              )}

              {page === 1 && <AccountInfo form={form} />}
              {page === 2 && <AddressInfo form={form} />}
              {page === 3 && <BillingInfo form={form} />}
              {page === 4 && <BankInfo form={form} />}
              {page === 5 && (
                <ServiceProvider
                  form={form}
                  companyList={companyList}
                  setCompanyList={setCompanyList}
                  customerDetails={customerDetails}
                />
              )}

              <hr className="mt-2 h-5"></hr>
              {page !== 0 && (
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setPage(page - 1)}
                    className="mt-4 border-2 m-2 justify-center inline-flex w-44  py-2 px-3 text-sm font-medium text-center text-white bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                    <p className="text-center text-black">{back}</p>
                  </button>
                  {page !== 5 && (
                    <Link href="/">
                      <button className="mt-4 border-2  m-2 justify-center inline-flex w-44  py-2 px-3 text-sm font-medium text-center text-white bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                        <p className="text-center text-black">{skip}</p>
                      </button>
                    </Link>
                  )}
                  {isLoading ? (
                    <div className="mt-4 m-2 py-2 px-3 ">
                      <Spinner />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-44 h-10 mt-4  m-2 justify-center  py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                      <p className="text-center">
                        {page === 5 ? confirm : next}
                      </p>
                    </button>
                  )}
                </div>
              )}
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
