import Link from 'next/link';
import React from 'react';
import Admin from 'src/layouts/Admin';
import { createPopper } from '@popperjs/core';
export default function AdminReport() {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      // placement: "right",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <div className='px-4 md:px-10 mx-auto w-full min-h-screen'>
      <div className='w-full flex justify-between mb-4'>
        <div className='flex flex-warp items-center gap-2'>
          <span className='back flex items-center justify-center border w-10 h-10 rounded-full'>
            <i class='fas fa-chart-bar' aria-hidden='true'></i>
          </span>
          <div className='flex flex-col'>
            <h4 className='welcomemsg font-semibold'>Reports</h4>
            <p className='text-xs'>
              Let's get started what you would like to do first
            </p>
          </div>
        </div>

        <div className='hidden'>
          <button
            type='submit'
            className='w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
            <i class='fa fa-plus-circle px-2' aria-hidden='true'></i>
            <span>View All</span>
          </button>
        </div>
      </div>

      <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
        {/* Filter & search table */}
        <div className='p-4 flex items-center '>
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
          {/* <div
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
          </div> */}
          {/* <div
            className='relative m-1'
            style={{ width: '-webkit-fill-available' }}>
            <button
              type='button'
              class='py-3 px-5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700'
              style={{ width: '-webkit-fill-available' }}>
              Export CSV
            </button>
          </div> */}
          <div className='flex items-center justify-center '>
            <a
              className='text-blueGray-500 block '
              href='#pablo'
              ref={btnDropdownRef}
              onClick={(e) => {
                e.preventDefault();
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}>
              <div className=' flex items-center gap-2 px-5 py-2  mx-4 text-sm font-medium rounded-lg border border-purple-400'>
                <span>Export</span>
                <span className='bg-purple-300 rounded-full w-6 h-6 flex items-center justify-center'>
                  <i class='fas fa-angle-down '></i>
                </span>
              </div>
            </a>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
              }>
              <Link href='#'>
                <a
                  className={
                    'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
                  }>
                  PDF
                </a>
              </Link>
              <Link href='#'>
                <a
                  className={
                    'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
                  }>
                  Excel
                </a>
              </Link>
              <Link href='#'>
                <a
                  className={
                    'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
                  }>
                  CSV
                </a>
              </Link>
            </div>
          </div>
        </div>
        <table className='w-full text-sm text-left text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 text-center'>
            <tr>
              <th scope='col' class='p-4'>
                <div class='flex items-center gap-2'>
                  <input
                    id='checkbox-all-search'
                    type='checkbox'
                    class='w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label for='checkbox-all-search' class=''>
                    ID
                  </label>
                </div>
              </th>
              <th scope='col' className='px-6 py-3'>
                Counselor
              </th>
              <th scope='col' className='px-6 py-3'>
                Clients
              </th>
              <th scope='col' className='px-6 py-3'>
                Booking time
              </th>
              <th scope='col' className='px-6 py-3'>
                Contact No
              </th>
              <th scope='col' className='px-6 py-3'>
                Problem type
              </th>
              <th scope='col' className='px-6 py-3'>
                Session
              </th>
              <th scope='col' className='px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b hover:bg-gray-50 text-center'>
              <td class='p-4 w-4'>
                <div class='flex items-center gap-2'>
                  <input
                    id='checkbox-table-search-1'
                    type='checkbox'
                    class='w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label for='checkbox-table-search-1' class=''>
                    1
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                Counselor 1
              </th>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                2 Clients
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
                  10 session
                </span>
              </td>
              <td className='text-right'>
                <button
                  // onClick={() => setShowModal(true)}
                  type='button'
                  className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                  <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                    Download
                  </span>
                </button>
              </td>
            </tr>
            <tr className='bg-white border-b hover:bg-gray-50 text-center'>
              <td class='p-4 w-4'>
                <div class='flex items-center gap-2'>
                  <input
                    id='checkbox-table-search-1'
                    type='checkbox'
                    class='w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label for='checkbox-table-search-1' class=''>
                    2
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                Counselor 2
              </th>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                24 Clients
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
                  10 session
                </span>
              </td>
              <td className='text-right'>
                <button
                  // onClick={() => setShowModal(true)}
                  type='button'
                  className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                  <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                    Download
                  </span>
                </button>
              </td>
            </tr>
            <tr className='bg-white hover:bg-gray-50 text-center'>
              <td class='p-4 w-4'>
                <div class='flex items-center gap-2'>
                  <input
                    id='checkbox-table-search-1'
                    type='checkbox'
                    class='w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label for='checkbox-table-search-1' class=''>
                    3
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                Counselor 3
              </th>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                20 Clients
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
                  10 session
                </span>
              </td>
              <td className='text-right'>
                <button
                  // onClick={() => setShowModal(true)}
                  type='button'
                  className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                  <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                    Download
                  </span>
                </button>
              </td>
            </tr>
            <tr className='bg-white hover:bg-gray-50 text-center'>
              <td class='p-4 w-4'>
                <div class='flex items-center gap-2'>
                  <input
                    id='checkbox-table-search-1'
                    type='checkbox'
                    class='w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label for='checkbox-table-search-1' class=''>
                    4
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                Counselor 4
              </th>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                72 Clients
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
                  10 session
                </span>
              </td>
              <td className='text-right'>
                <button
                  // onClick={() => setShowModal(true)}
                  type='button'
                  className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                  <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                    Download
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
AdminReport.layout = Admin;
