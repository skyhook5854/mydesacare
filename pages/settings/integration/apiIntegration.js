import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useQueryClient } from "react-query";
import { usePersonalAccesToken } from "src/actions/common";
import { CustomModal } from "src/components/Modal";
import AddNewApi from "./add-new-api";

export default function ApiIntegration() {
  const { t: t1 } = useTranslation("settings");

  const queryClient = useQueryClient();
  const customer = queryClient.getQueryData(["customerInfo"])
  const company = queryClient.getQueryData(["companyInfo"])
  console.log('getQueryData', company)

  const { data, error, isError, isLoading } = usePersonalAccesToken();
  console.log('usePersonalAccesToken', data)

  const [modal, setOpenModal] = useState(false)
  async function closeModal() {
    await setOpenModal(false);
  }
  const [page, setPage] = useState();
  useEffect(() => {
    if(modal){
      setPage (<AddNewApi closeModal={closeModal} />)
    }
  }, [modal])

  return (
    <>
      <div className=" px-12 mx-auto ">
        <h3 className="flex flex-col items-center justify-center py-6 text-black font-bold text-4xl">
          {t1("content.integration.title")} <br />
          <Link href="">
            <a className="text-sm text-primary pr-2">
              {t1("content.integration.apiDocumentation")}
              <i class="px-2 fas fa-external-link-alt text-blueGray-300"></i>
            </a>
          </Link>
        </h3>

        <fieldset>
          <legend className="sr-only">Countries</legend>

          <form>
            <div className="flex flex-row mb-6 border-b">
              <div className="mb-6 m-3 w-6/12 mx-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t1("content.integration.companyCode")}
                </label>
                <p>{company?.data[0].code}</p>
              </div>
              <div className="mb-6 m-3 w-6/12 mx-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t1("content.integration.companyID")}
                </label>
                <p>{customer?.data.companyId}</p>
              </div>
            </div>
            <div className="flex flex-row mb-6 ">
              <div className="mb-6 m-3 w-6/12 mx-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t1("content.integration.userID")}
                </label>
                <p>{customer?.data.userId}</p>
              </div>
              <div className="mb-6 m-3 w-6/12 mx-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t1("content.integration.customerID")}
                </label>
                <p>{customer?.data.users[0].customerId}</p>
              </div>
            </div>
          </form>
        </fieldset>
        {/* Table API Integrations */}
        <div className="absoulte bottom-0 bg-white rounded-md mt-10">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="relative py-8">
              <button onClick={() => setOpenModal(true)} className="absolute top-0 right-0 h-10 m-3 justify-center  py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                <p className="text-center">
                  {t1("content.integration.createKey")}
                </p>
              </button>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                          {t1("content.integration.tableColumn.name")}
                        </th>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                          {t1("content.integration.tableColumn.key.name")}
                        </th>
                        <th
                          scope="col"
                          class="text-right py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                          {t1("content.integration.tableColumn.action")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data ? Object.entries(data?.data).map(([key, value]) => (
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {value.name}
                          </td>
                          <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            *****************
                          </td>
                          <td class="text-right py-4 px-6 text-sm text-red-500 whitespace-nowrap dark:text-gray-400">
                            {t1("content.integration.delete")}
                          </td>
                        </tr>
                      )) : ""}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal ? 
        <CustomModal
          action={closeModal}
          title={t1("content.integration.createKey")}
          content={page}
        />
      :''}
      
    </>
  );
}

// function ContentModal(){
//   const onSubmit = async (values) => {
//     await mutate(values);
//   };
//   return (
//     <>
//       {/*body*/}
//       <div className="relative p-6 flex-auto">
//         <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
//             I always felt like I could do anything. That’s the main
//             thing people are controlled by! Thoughts- their perception
//             of themselves! They're slowed down by their perception of
//             themselves. If you're taught you can’t do anything, you
//             won’t do anything. I was taught I could do everything.
//         </p>
//       </div>
//       {/*footer*/}
//       <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//         <button
//             className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//             type="button"
//             onClick={() => closeModal()}
//         >
//             Close
//         </button>
//         <button
//             className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//             type="button"
//             onClick={() => closeModal()}
//         >
//             Save Changes
//         </button>
//       </div>
//     </>
//   )
// }

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["settings"])),
    },
  };
}
