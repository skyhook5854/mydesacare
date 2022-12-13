import React, { useState } from 'react';
import Admin from 'src/layouts/Admin';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CardLineChart from 'src/components/Cards/CardLineChart';
import CardBarChart from 'src/components/Cards/CardBarChart';

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='px-4 md:px-10 mx-auto w-full min-h-screen'>
      <div className='w-full flex justify-between'>
        <div className='flex flex-warp items-center gap-2'>
          <span className='avatar border w-10 h-10 rounded-full'>
            <img
              className='avatar border w-10 h-10 rounded-full'
              src='./img/team-1-800x800.jpg'
              alt=''
            />
          </span>
          <div className='flex flex-col'>
            <h4 className='welcomemsg'>Hi, Superadmin</h4>
            <p className='text-xs'>Welcome to your MyDesa Care Dashboard</p>
          </div>
        </div>

        <div className=''>
          <button
            type='submit'
            onClick={() => setShowModal(true)}
            className='w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
            <i class='fa fa-plus-circle px-2' aria-hidden='true'></i>
            <span>New Counselor</span>
          </button>
        </div>
      </div>

      <div className='grid grid-cols-5 gap-2 py-8'>
        <div className='flex justify-center bg-white rounded-md text-center'>
          <div className='p-4 flex justify-between gap-2'>
            <div className='flex items-center text-sm'>
              <span className='flex items-center justify-center w-4 h-4 p-4 rounded-full bg-purple-200'>
                <i className='text-purple-600 fas fa-id-card-alt'></i>
              </span>
            </div>
            <div className='flex flex-col items-center justify-center text-sm'>
              <div className='font-bold'>3</div>
              <div> All Appointments</div>
            </div>
          </div>
        </div>

        <div className='flex justify-center bg-white rounded-md text-center'>
          <div className='p-4 flex justify-between gap-2'>
            <div className='flex items-center text-sm'>
              <span className='flex items-center justify-center w-4 h-4 p-4 rounded-full bg-green-200'>
                <i className='text-green-600 far fa-file-alt'></i>
              </span>
            </div>
            <div className='flex flex-col items-center justify-center text-sm'>
              <div className='font-bold'>23</div>
              <div> Counselor</div>
            </div>
          </div>
        </div>

        <div className='flex justify-center bg-white rounded-md text-center'>
          <div className='p-4 flex justify-between gap-2'>
            <div className='flex items-center text-sm'>
              <span className='flex items-center justify-center w-4 h-4 p-4 rounded-full bg-yellow-200'>
                <i className='text-yellow-600 fa fa-sync'></i>
              </span>
            </div>
            <div className='flex flex-col items-center justify-center text-sm'>
              <div className='font-bold'>182</div>
              <div> In-progress</div>
            </div>
          </div>
        </div>

        <div className='flex justify-center bg-white rounded-md text-center'>
          <div className='p-4 flex justify-between gap-2'>
            <div className='flex items-center text-sm'>
              <span className='flex items-center justify-center w-4 h-4 p-4 rounded-full bg-red-200'>
                <i className='text-red-600 fas fa-exclamation-triangle'></i>
              </span>
            </div>
            <div className='flex flex-col items-center justify-center text-sm'>
              <div className='font-bold'>182</div>
              <div> Cancelled</div>
            </div>
          </div>
        </div>

        <div className='flex justify-center bg-white rounded-md text-center'>
          <div className='p-4 flex justify-between gap-2'>
            <div className='flex items-center text-sm'>
              <span className='flex items-center justify-center w-4 h-4 p-4 rounded-full bg-green-200'>
                <i className='text-green-600 far fa-thumbs-up'></i>
              </span>
            </div>
            <div className='flex flex-col items-center justify-center text-sm'>
              <div className='font-bold'>27</div>
              <div> Completed</div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap'>
        <div className='w-full xl:w-8/12 mb-12 xl:mb-0 '>
          <CardLineChart />
        </div>
        <div className='w-full xl:w-4/12 '>
          <CardBarChart />
        </div>
      </div>

      <div className='my-2 mx-0 bg-white rounded-md hidden'>
        <div className='border-b'>
          <div className='text-sm text-blue-600 text-left border-b-2 border-blue-600 p-2 pb-1'>
            Total Appointments
          </div>
        </div>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <div className='p-4 flex items-center'>
            <div
              className='relative m-1'
              style={{ width: '-webkit-fill-available' }}>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'></path>
                </svg>
              </div>
              <input
                type='text'
                id='table-search'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5'
                placeholder='Search'
                style={{ width: '-webkit-fill-available' }}
              />
            </div>
            <div
              className='relative my-1 mr-0'
              style={{ width: '-webkit-fill-available' }}>
              <input
                type='datetime-local'
                id='table-datetime'
                className='bg-gray-50 border border-r-0.5 border-gray-300 text-gray-900 text-sm rounded-lg rounded-r-none focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                style={{ width: '-webkit-fill-available' }}
              />
            </div>
            <div
              className='relative my-1'
              style={{ width: '-webkit-fill-available' }}>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'></path>
                </svg>
              </div>
              <input
                type='text'
                id='table-filter'
                className='bg-gray-50 border border-l-0.5 border-r-0.5 border-gray-300 text-gray-900 text-sm rounded-lg rounded-r-none rounded-l-none focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5'
                placeholder='Filter'
                style={{ width: '-webkit-fill-available' }}
              />
            </div>
            <div
              className='relative my-1 ml-0'
              style={{ width: '-webkit-fill-available' }}>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'></path>
                </svg>
              </div>
              <input
                type='text'
                id='table-sort'
                className='bg-gray-50 border border-l-0.5 border-gray-300 text-gray-900 text-sm rounded-lg rounded-l-none focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5'
                placeholder='Sort'
                style={{ width: '-webkit-fill-available' }}
              />
            </div>
            <div
              className='relative m-1'
              style={{ width: '-webkit-fill-available' }}>
              <button
                type='button'
                class='py-3 px-5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700'
                style={{ width: '-webkit-fill-available' }}>
                Export CSV
              </button>
            </div>
          </div>
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 text-center'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Client
                </th>
                <th scope='col' className='px-6 py-3'>
                  Datetime
                </th>
                <th scope='col' className='px-6 py-3'>
                  Contact No
                </th>
                <th scope='col' className='px-6 py-3'>
                  Services
                </th>
                <th scope='col' className='px-6 py-3'>
                  Status
                </th>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b hover:bg-gray-50 text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                  Zainal
                </th>
                <td className='px-6 py-4'>
                  14 JUN 2021
                  <br />
                  <time className='text-xs'>9:00 AM</time>
                </td>
                <td className='px-6 py-4'>0189723650</td>
                <td className='px-6 py-4'>Family</td>
                <td className='px-6 py-4'>
                  <span className='bg-yellow-300 text-yellow-auto0 text-xs font-medium px-2.5 py-0.5 rounded'>
                    Pending
                  </span>
                </td>
                <td className='text-right'>
                  <button
                    onClick={() => setShowModal(true)}
                    type='button'
                    className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                    <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                      EDIT
                    </span>
                  </button>
                </td>
              </tr>
              <tr className='bg-white border-b hover:bg-gray-50 text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                  Zulpadhli
                </th>
                <td className='px-6 py-4'>
                  14 JUN 2021
                  <br />
                  <time className='text-xs'>9:00 AM</time>
                </td>
                <td className='px-6 py-4'>0189723650</td>
                <td className='px-6 py-4'>Family</td>
                <td className='px-6 py-4'>
                  <span className='bg-red-300 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                    Rejected
                  </span>
                </td>
                <td className='text-right'>
                  <button
                    onClick={() => setShowModal(true)}
                    type='button'
                    className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                    <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                      EDIT
                    </span>
                  </button>
                </td>
              </tr>
              <tr className='bg-white hover:bg-gray-50 text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                  Zainal
                </th>
                <td className='px-6 py-4'>
                  14 JUN 2021
                  <br />
                  <time className='text-xs'>9:00 AM</time>
                </td>
                <td className='px-6 py-4'>0189723650</td>
                <td className='px-6 py-4'>Family</td>
                <td className='px-6 py-4'>
                  <span className='bg-green-300 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                    Success
                  </span>
                </td>
                <td className='text-right'>
                  <button
                    onClick={() => setShowModal(true)}
                    type='button'
                    className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                    <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                      EDIT
                    </span>
                  </button>
                </td>
              </tr>
              <tr className='bg-white hover:bg-gray-50 text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                  Zulpadhli
                </th>
                <td className='px-6 py-4'>
                  14 JUN 2021
                  <br />
                  <time className='text-xs'>9:00 AM</time>
                </td>
                <td className='px-6 py-4'>0189723650</td>
                <td className='px-6 py-4'>Family</td>
                <td className='px-6 py-4'>
                  <span className='bg-indigo-300 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                    In Progress
                  </span>
                </td>
                <td className='text-right'>
                  <button
                    onClick={() => setShowModal(true)}
                    type='button'
                    className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                    <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                      EDIT
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showModal != false ? (
        <>
          <div
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-40 right-0 left-20 z-40 w-full h-modal md:h-full">
            <div className="mx-auto relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
                <div className="py-6 px-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900">
                    Add New Counselor
                  </h3>
                  <form className="space-y-6">
                    {/* <div>
                      <label
                        htmlFor="datetime"
                        class="block mb-2 text-sm font-medium text-gray-900">
                        DATETIME
                      </label>
                      <input
                        type="datetime-local"
                        name="datetime"
                        id="datetime"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div> */}
                    <div>
                      <label
                        htmlFor="contact_no"
                        class="block mb-2 text-sm font-medium text-gray-900">
                        Email
                      </label>
                      <input
                        type="text"
                        name="counseloremail"
                        id="counseloremail"
                        value="counselor@gmail.com"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact_no"
                        class="block mb-2 text-sm font-medium text-gray-900">
                        CONTACT NO
                      </label>
                      <input
                        type="text"
                        name="contact_no"
                        id="contact_no"
                        value="0189723650"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="temp-pass"
                        class="block mb-2 text-sm font-medium text-gray-900">
                        Temporary Password
                      </label>
                      <input
                        type="password"
                        name="temp-pass"
                        id="temp-pass"
                        value="0189723650"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div>
                    {/* <div>
                      <label
                        htmlFor="services"
                        class="block mb-2 text-sm font-medium text-gray-900">
                        SERVICES
                      </label>
                      <input
                        type="text"
                        name="services"
                        id="services"
                        value="Family"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div> */}
                    <button
                      type="submit"
                      className="w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                      Invite team 
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black bg-opacity-50 fixed inset-0 z-20"></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
Dashboard.layout = Admin;
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'onboarding',
        'addressbookpage',
        'billingpage',
        'components',
        'homepage',
        'importBulkOrder',
        'integrationPage',
        'multiPointOrder',
        'orderDetailsPage',
        'orderpage',
        'pageWrapper',
        'settings',
        'topuppage',
      ])),
    },
  };
}
