import { useTranslation } from 'next-i18next';
import React from 'react';

import UserDropdown from 'src/components/Dropdowns/UserDropdown.js';
import { useCommonHooks } from 'src/hooks/translation/useCommonHooks';
import LanguageDropdown from '../Dropdowns/languageDropdown';

import { useRecoilValue } from 'recoil';
import { authAtom } from 'src/recoil/auth';
import { useCountAppointment } from 'src/actions/appointment';

export default function Navbar() {
  const { bannerFreshLook, whatNew } = useCommonHooks();
  const data = useRecoilValue(authAtom);
  const { data: appoint, isFetching } = useCountAppointment();
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
                <div className="items-center flex">
                  <span className="w-8 h-8 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                    <img
                      alt="..."
                      className="w-full rounded-full align-middle border-none shadow-lg"            
                      src={data?.data?.profile?.profile_img ? 'https://staging.mydesa.my/v2/'+data?.data.profile.profile_img : '/img/team-1-800x800.jpg'}
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

              <i class="text-purple-600  fas fa-bell text-xs"></i>
              <UserDropdown />
              
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
