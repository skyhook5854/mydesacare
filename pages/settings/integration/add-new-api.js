import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useCreateApiKey } from "src/actions/common";
import { Formik } from "formik";
import { Spinner } from "src/components/Spinner";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function AddNewApi({closeModal}){
  const { t: t1 } = useTranslation("settings");
  const [tokenData, setTokenData] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const { mutate, data, error, isError, isLoading } = useCreateApiKey();
  const onSubmit = async (values) => {
      console.log('onSubmit',values)
    await mutate(values);
  };

    useEffect(() => {
        if(data != undefined){
            setTokenData(data.data)
        }
    }, [data])
    console.log('tokenData',tokenData)

  return (
    <>
        {isLoading ? <Spinner /> : ''}
        {
          tokenData ?
          <div className='text-sm px-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <i className="fas fa-key" style={{ fontSize: 30, margin: '20px 0' }} />
            <h3>{t1('content.integration.createAPI')}</h3>
            <div>{t1('content.integration.createMessage')}</div>
            <div style={{ color: 'red', textAlign: 'center' }}>{t1('content.integration.createWarn')}</div>
            <div className="rounded overflow-auto md:flex md:flex-wrap block bg-gray-100 p-3 m-3 justify-between w-full">
              <span>{tokenData.data.token}</span>
              <CopyToClipboard text={tokenData.data.token}>
                <button style={{ borderWidth: '1px 0', borderRadius: 0 }} className="copyButton" onClick={() => setCopySuccess(true)}>
                  {copySuccess ? t1('content.integration.copied') : t1('content.integration.copy')}
                </button>
              </CopyToClipboard>
            </div>
          </div> :
            <>
            <Formik
                enableReinitialize
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                    name: "",
                }}
                onSubmit={onSubmit}>
                {(form) => (
                <>
                <form onSubmit={form.handleSubmit}>
                    <div className="relative px-5 py-3 flex-auto">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                            <div className="flex flex-row">
                            <div className="mb-6 m-3 w-full">
                                {/* <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {t1("content.integration.apiKeyName")}
                                </label> */}
                                <input
                                {...form}
                                name="name"
                                id="name"
                                type="text"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder={t1("content.integration.apiKeyName")}
                                required
                                />
                            </div>
                            </div>
                        </p>
                    </div>
                    
                    <div className="flex items-center justify-end px-5 py-3 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => closeModal()}
                        >
                            {t1('content.cancel')}
                        </button>
                        <button
                            className="bg-primary text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            // onClick={() => closeModal()}
                        >
                            {t1("content.save")}
                        </button>
                    </div>
                </form>
                </>
                )}
            </Formik>
            </>
        }
    </>
  )
}