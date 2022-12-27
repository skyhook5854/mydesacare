import React, { useState } from 'react';
import Admin from 'src/layouts/Admin';
import Link from 'next/link';
import { createPopper } from '@popperjs/core';
import { useAllProfile } from 'src/actions/appointment';
import { useCounselorAdd } from "src/actions/counselor";
import DataTable from 'react-data-table-component';
import moment from 'moment';
import { ToastContainer } from "react-toastify";
import { Formik } from 'formik';

export default function AdminCounselor() {
  const [showModal, setShowModal] = useState(false);
  const [viewCounselor, setViewCounselor] = useState(false);

  const { mutate, error, isError, isLoading: isButtonLoading  } = useCounselorAdd();
  
  const onSubmit = async (values) => {
    console.log('data', values);
    setShowModal(false);
    // return false;
    await mutate(values);
    // props.onHandlerModal(false, []);
  };

  const { data, isLoading } = useAllProfile();
  const countPerPage = 10; 

  const columns = [
    {
        name: <div className='font-bold'>COUNSELOR</div>,
        selector: row => row.name ? row.name : 'Counsellor',
    },
    {
        name: <div className='font-bold'>JOIN DATE</div>,
        cell: row => <div className='w-full text-center'><div>{moment(row.created_at).format("DD/MM/YYYY")}</div><div><time className='text-xs'>{moment(row.created_at).format("hh:mm A")}</time></div></div>,
    },
    {
        name: <div className='w-full text-center font-bold'>CONTACT NO</div>,
        cell: row => <div className='w-full text-center'>{row.phone_no ? row.phone_no : 'N/A'}</div>,
    },
    {
        name: <div className='w-full text-center font-bold'>EXPERTISE</div>,
        cell: row => <div className='w-full text-center'>{row.expertise ? row.expertise : 'N/A'}</div>,
    },
    // {
    //     name: <div className='w-full text-center font-bold'>STATUS</div>,
    //     cell: row => <div className='w-full text-center font-bold'>
    //                       {row.status== 1 ? <span className='bg-yellow-100 text-yellow-auto0 text-xs font-medium px-2.5 py-0.5 rounded'>New</span> : '' }
    //                       {row.status== 2 ? <span className='bg-blue-300 text-yellow-auto0 text-xs font-medium px-2.5 py-0.5 rounded'>Accept</span> : '' }
    //                       {row.status== 3 ? <span className='bg-yellow-300 text-yellow-auto0 text-xs font-medium px-2.5 py-0.5 rounded'>In-Progress</span> : '' }
    //                       {row.status== 4 ? <span className='bg-green-300 text-yellow-auto0 text-xs font-medium px-2.5 py-0.5 rounded'>Completed</span> : '' }
    //                       {row.status== 5 ? <span className='bg-red-100 text-yellow-auto0 text-xs font-medium px-2.5 py-0.5 rounded'>Cancelled</span> : '' }
    //                       {row.status== 6 ? <span className='bg-red-300 text-yellow-auto0 text-xs font-medium px-2.5 py-0.5 rounded'>Rejected</span> : '' }
    //                   </div>,
    // },
    {
      name : <div className='w-full text-center font-bold'>ACTION</div>,
      cell : row => <div className='w-full text-center font-bold'>
                      <button
                        onClick={() => setViewCounselor(true)}
                        type='button'
                        className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                        <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                          View
                        </span>
                      </button>
                    </div>
    }
  ];


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
    <>
    <ToastContainer />
    <div className='px-4 md:px-10 mx-auto w-full min-h-screen'>
      <div className='w-full flex justify-between mb-4'>
        <div className='flex flex-warp items-center gap-2'>
          <span className='back flex items-center justify-center border w-10 h-10 rounded-full'>
            <i class='fa fa-angle-left' aria-hidden='true'></i>
          </span>
          <div className='flex flex-col'>
            <h4 className='welcomemsg font-semibold'>Counselor</h4>
            <p className='text-xs'>
              Let's get started what you would like to do first
            </p>
          </div>
        </div>

        <div className=''>
          <button
            onClick={() => setShowModal(true)}
            type='submit'
            className='w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
            <i class='fa fa-plus-circle px-2' aria-hidden='true'></i>
            <span>New Counselor</span>
          </button>
        </div>
      </div>

      <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
        {/* Filter & search table */}
        <div className='p-4 flex items-center '>
          {/* <div
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
          </div> */}
          {/* <div
            className='relative my-1 mr-0'
            style={{ width: '-webkit-fill-available' }}>
            <input
              type='datetime-local'
              id='table-datetime'
              className='bg-gray-50 border border-r-0.5 border-gray-300 text-gray-900 text-sm rounded-lg rounded-r-none focus:ring-blue-500 focus:border-blue-500 block p-2.5'
              style={{ width: '-webkit-fill-available' }}
            />
          </div> */}
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
          </div> */}
          {/* <div
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
          {/* <div className='flex items-center justify-center '>
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
              </div> */}
        </div>
        <DataTable
            // title=" "
            className='w-full'
            columns={columns} 
            data={data?.profile}
            progressPending={isLoading} 
            highlightOnHover
            pagination
            paginationServer
            paginationTotalRows={data?.count}
            paginationPerPage={countPerPage}
            paginationComponentOptions={{
              noRowsPerPage: true
            }}
            onChangePage={page => {setPage(page)}}
            // selectableRows={isAdmin}
            // selectableRowDisabled={rowDisabledCriteria}
            // contextActions={contextActions}
            // onSelectedRowsChange={handleRowSelected}
            // clearSelectedRows={toggleCleared}
        />
        <table className='w-full text-sm text-left text-gray-500 hidden'>
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
                Join Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Contact No
              </th>
              <th scope='col' className='px-6 py-3'>
                Expertise
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
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
              {/* <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                Zainal
              </th> */}
              <td className='px-6 py-4'>
                14 JUN 2021
                <br />
                {/* <time className='text-xs'>9:00 AM</time> */}
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
                  onClick={() => setViewCounselor(true)}
                  type='button'
                  className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                  <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                    View
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
              {/* <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                Zulpadhli
              </th> */}
              <td className='px-6 py-4'>
                14 JUN 2021
                <br />
                {/* <time className='text-xs'>9:00 AM</time> */}
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
                  // onClick={() => setShowModal(true)}
                  type='button'
                  className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                  <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                    View
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
              {/* <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                Zainal
              </th> */}
              <td className='px-6 py-4'>
                14 JUN 2021
                <br />
                {/* <time className='text-xs'>9:00 AM</time> */}
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
                  // onClick={() => setShowModal(true)}
                  type='button'
                  className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                  <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                    View
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
              {/* <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                Zulpadhli
              </th> */}
              <td className='px-6 py-4'>
                14 JUN 2021
                <br />
                {/* <time className='text-xs'>9:00 AM</time> */}
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
                  // onClick={() => setShowModal(true)}
                  type='button'
                  className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
                  <span className='text-xs px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                    View
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
                  <Formik
                        enableReinitialize
                        validateOnChange={false}
                        validateOnBlur={false}
                        initialValues={{
                          counseloremail : ``,
                          contact_no : ``,
                          temp_pass : ''
                        }}
                    onSubmit={onSubmit}>
                        {(form) => (
                          <form className="space-y-6" onSubmit={form.handleSubmit}>
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
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              onChange={form.handleChange} 
                              onBlur={form.handleBlur}
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
                              onChange={form.handleChange} 
                              onBlur={form.handleBlur}
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
                              name="temp_pass"
                              id="temp-pass"
                              onChange={form.handleChange} 
                              onBlur={form.handleBlur}
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
                        )}
                    </Formik>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black bg-opacity-50 fixed inset-0 z-20"></div>
        </>
      ) : (
        ''
      )}
      {viewCounselor != false ? (
        <>
          <div
            aria-hidden='true'
            className='overflow-y-auto overflow-x-hidden fixed top-40 right-0 left-20 z-40 w-full h-modal md:h-full'>
            <div className='mx-auto relative p-4 w-full max-w-md h-full md:h-auto'>
              <div className='relative bg-white rounded-lg shadow'>
                <button
                  onClick={() => setViewCounselor(false)}
                  type='button'
                  className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'>
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'></path>
                  </svg>
                </button>
                <div className='py-6 px-6 lg:px-8'>
                  <h3 className='mb-4 text-xl font-medium text-gray-900'>
                    Counselor Details
                  </h3>
                  <div className='flex justify-between border-b py-2'>
                    <div className='flex items-center gap-2 mb-2'>
                      <Link href=''>
                        <span className='bg-gray-200 flex items-center justify-center border w-10 h-10  rounded-full'>
                          <img
                            className='rounded-full'
                            src='/img/team-1-800x800.jpg'
                            alt=''
                          />
                        </span>
                      </Link>
                      <div className='flex flex-col text-xs'>
                        <h4>Mohd Mahyudin Ayub</h4>
                        <h5>clientemail@gmail.com</h5>
                      </div>
                    </div>
                    <div className='flex'>
                      <button
                        type='button'
                        className='relative  inline-flex gap-2 items-center justify-center px-3 overflow-hidden text-xs font-medium text-gray-900 rounded-md border'>
                        <i class="fa fa-certificate" aria-hidden="true"></i>
                        <span className='text-xs'>Anxiety</span>
                      </button>
                    </div>
                  </div>
                  <form className='space-y-6 py-4'>
                    <div>
                      <label
                        htmlFor='datetime'
                        class='block mb-2 text-sm font-medium text-gray-900'>
                        Join Date
                      </label>
                      <input
                        type='datetime-local'
                        name='datetime'
                        id='datetime'
                        class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        required
                      />
                    </div>
                    {/* <div>
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
                    </div> */}
                    <div>
                      <label
                        htmlFor='contact_no'
                        class='block mb-2 text-sm font-medium text-gray-900'>
                        CONTACT NO
                      </label>
                      <input
                        type='text'
                        name='contact_no'
                        id='contact_no'
                        value='0189723650'
                        class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='temp-pass'
                        class='block mb-2 text-sm font-medium text-gray-900'>
                        Change Password
                      </label>
                      <input
                        type='password'
                        name='temp-pass'
                        id='temp-pass'
                        value='0189723650'
                        class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
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
                    <div className='flex justify-between'>
                      <label>Disable match</label>
                      <label class='flex relative cursor-pointer  justify-end mr-4'>
                        <input
                          type='checkbox'
                          class='sr-only'
                          value=''
                          // onChange={onChange}
                        />

                        <div class='w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600'></div>
                      </label>
                    </div>
                    <div className='flex items-center gap-2 py-4'>
                        <button className='w-1/2 border font-medium rounded-lg text-sm px-4 py-1 text-center'>
                          Update
                        </button>
                        <button
                          type='submit'
                          className='w-1/2 text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-1 text-center'>
                          Delete account  
                        </button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-black bg-opacity-50 fixed inset-0 z-20'></div>
        </>
      ) : (
        ''
      )}
    </div>
    </>
  );
}
AdminCounselor.layout = Admin;
