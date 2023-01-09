import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';

import UserDropdown from 'src/components/Dropdowns/UserDropdown.js';
import { useCommonHooks } from 'src/hooks/translation/useCommonHooks';
import LanguageDropdown from '../Dropdowns/languageDropdown';

import { useCounselorAdd, useCountCounselor } from 'src/actions/counselor';

import { useRecoilValue } from 'recoil';
import { authAtom } from 'src/recoil/auth';
import { useCountAppointment } from 'src/actions/appointment';
import { Formik } from 'formik';

export default function Navbar() {
  const { bannerFreshLook, whatNew } = useCommonHooks();
  const data = useRecoilValue(authAtom);
  const { data: appoint, isFetching } = useCountAppointment();
  const { data: coun } = useCountCounselor();
  const {
    mutate,
    error,
    isError,
    isLoading: isButtonLoading,
  } = useCounselorAdd();

  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (values) => {
    console.log('data', values);
    setShowModal(false);
    // return false;
    await mutate(values);
    // props.onHandlerModal(false, []);
  };
  return (
    <>
      {/* Navbar */}
      <nav className='absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-6'>
        <div className='w-full mx-auto items-center md:flex-nowrap flex-wrap md:px-4 px-4'>
          <div
            className='hidden w-full md:flex justify-between p-4 bg-white rounded-lg dark:bg-blue-200'
            id='alertId'
            role='alert'
          >
            <div className='flex items-center'>
              <div>
                <div className='items-center flex'>
                  <span className='w-8 h-8 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full'>
                    <img
                      alt='...'
                      className='w-full rounded-full align-middle border-none shadow-lg'
                      src={
                        data?.data?.profile?.profile_img
                          ? 'https://staging.mydesa.my/v2/' +
                            data?.data.profile.profile_img
                          : '/img/team-1-800x800.jpg'
                      }
                    />
                  </span>
                </div>
              </div>
              <div className=''>
                <div className='m-0 px-2'>
                  <p className='text-sm font-semibold'>
                    Hi, {data?.data.name}!
                  </p>
                  <p className='text-xs font-medium'>
                    Here you can see all your appointment
                  </p>
                </div>
              </div>
              {/* <span className="flex items-center justify-center bg-blue-100 rounded w-8 h-8">
                <svg
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span> */}
              <div className='ml-3 text-sm font-medium dark:text-blue-900'>
                {/* {bannerFreshLook}
                <a
                  href="/notifications"
                  className="font-semibold text-primary hover:text-blue-800 dark:hover:text-blue-900 no-underline">
                  🎉 <span className="ml-2">{whatNew}</span>
                </a> */}
              </div>
            </div>

            {/* User */}
            <ul className=' md:flex  flex-col justify-between md:flex-row list-none items-center gap-2'>
              {/* <LanguageDropdown /> */}

              {/* <i class='text-purple-600  fas fa-bell text-xs'></i> */}
              <UserDropdown />
              {/* <div className=' w-full rounded-full'>
                <button
                  type='submit'
                  onClick={() => setShowModal(true)}
                  className='flex items-center w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center'
                >
                  <i class='fa fa-plus-circle px-2' aria-hidden='true'></i>
                  <span className='text-xs'>New Counselor</span>
                </button>
              </div> */}
            </ul>
            {showModal != false ? (
          <>
            <div
              aria-hidden='true'
              className='overflow-y-auto overflow-x-hidden fixed top-40 right-0 left-20 z-40 w-full h-modal md:h-full'
            >
              <div className='mx-auto relative p-4 w-full max-w-md h-full md:h-auto'>
                <div className='relative bg-white rounded-lg shadow'>
                  <button
                    onClick={() => setShowModal(false)}
                    type='button'
                    className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                  <div className='py-6 px-6 lg:px-8'>
                    <h3 className='mb-4 text-xl font-medium text-gray-900'>
                      Add New Counselor
                    </h3>
                    <Formik
                      enableReinitialize
                      validateOnChange={false}
                      validateOnBlur={false}
                      initialValues={{
                        counseloremail: ``,
                        contact_no: ``,
                        temp_pass: '',
                      }}
                      onSubmit={onSubmit}
                    >
                      {(form) => (
                        <form
                          className='space-y-6'
                          onSubmit={form.handleSubmit}
                        >
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
                              htmlFor='contact_no'
                              class='block mb-2 text-sm font-medium text-gray-900'
                            >
                              Email
                            </label>
                            <input
                              type='text'
                              name='counseloremail'
                              id='counseloremail'
                              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor='contact_no'
                              class='block mb-2 text-sm font-medium text-gray-900'
                            >
                              CONTACT NO
                            </label>
                            <input
                              type='text'
                              name='contact_no'
                              id='contact_no'
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor='temp-pass'
                              class='block mb-2 text-sm font-medium text-gray-900'
                            >
                              Temporary Password
                            </label>
                            <input
                              type='password'
                              name='temp_pass'
                              id='temp-pass'
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
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
                          <button
                            type='submit'
                            className='w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                          >
                            Invite team
                          </button>
                        </form>
                      )}
                    </Formik>
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
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
