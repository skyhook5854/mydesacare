import React, { useState } from 'react';

import Link from 'next/link';
import { createPopper } from '@popperjs/core';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useSessionAll } from "src/actions/appointment";
import { CircularProgress } from '@mui/material';

export default function ActionViewCompleted(props){

  // stepper timeline
  const [activeStep, setActiveStep] = React.useState(0);

  const { data, isFetching } = useSessionAll(props.dataAppoint.unique_link);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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


    console.log('props',props);
    return(
        <>
            <div            
                aria-hidden='true'
                className='overflow-y-auto overflow-x-hidden fixed top-40 right-0 left-20 z-40 w-full h-modal md:h-full'>
                <div className='mx-auto relative p-4 w-full max-w-md h-full md:h-auto'>
                <div className='relative bg-white rounded-lg shadow'>
                    <button
                    onClick={() => props.onHandlerModal(false, [])}
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
                        Timeline Session
                    </h3>
                    <div className='flex justify-between border-b py-4'>
                        <div className='flex items-center gap-2'>
                        <Link href=''>
                            <span className='bg-gray-200 flex items-center justify-center border w-10 h-10  rounded-full'>
                            <img
                                className='rounded-full'
                                src={
                                    props?.dataAppoint?.c_profile_img
                                    ? 
                                      'https://www.mydesa.my/v2/' + props?.dataAppoint?.c_profile_img
                                    : 
                                      'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'
                                }
                                alt=''
                            />
                            </span>
                        </Link>
                        <div className='flex flex-col text-xs'>
                            <h4 className='font-bold'>{props.dataAppoint.c_name}</h4>
                            <h5>{props.dataAppoint.c_email}</h5>
                        </div>
                        </div>
                        <div className='flex'>
                        {/* <button
                            type='button'
                            className='relative  inline-flex gap-2 items-center justify-center px-3 overflow-hidden text-xs font-medium text-gray-900 rounded-md border'>
                            <i class='fa fa-certificate' aria-hidden='true'></i>
                            <span className='text-xs'>Anxiety</span>
                        </button> */}
                        </div>
                    </div>
                    <div className='flex justify-between border-b py-4 mb-4'>
                        <div className='flex items-center gap-2 '>
                        <Link href=''>
                            <span className='bg-gray-200 flex items-center justify-center border w-10 h-10  rounded-full'>
                            <img
                                className='rounded-full'
                                src={
                                    props?.dataAppoint?.profile_img
                                    ? 
                                      'https://www.mydesa.my/v2/' + props?.dataAppoint?.profile_img
                                    : 
                                      'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'
                                }
                                alt=''
                            />
                            </span>
                        </Link>
                        <div className='flex flex-col text-xs'>
                            <h4 className='font-bold'>{props?.dataAppoint.name}</h4>
                            <h5>{props?.dataAppoint.email}</h5>
                        </div>
                        </div>
                        <div className='flex'>
                        {/* <button
                            type='button'
                            className='relative  inline-flex gap-2 items-center justify-center px-3 overflow-hidden text-xs font-medium text-gray-900 rounded-md border'>
                            <i className='text-red-400 fas fa-thumbs-down'></i>
                            <span className='text-xs font-bold'>Score</span>
                            <span className='text-xs'>14</span>
                        </button> */}
                        </div>
                    </div>
                        {/* Stepper timeline content */}
                        {!isFetching 
                        ? 
                            <div>
                                <ol class='relative border-l border-gray-200 dark:border-gray-700'>
                                    {data?.steps.map((step, index) => (
                                        <li class='mb-10 ml-4' key={index}>
                                        <span class='flex absolute -left-3 justify-center items-center w-6 h-6 text-white bg-purple-800 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 mt-8'>
                                            {step.label}
                                        </span>
                                        <time class='mb-1 ml-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                                            <p className="font-bold text-black mb-3">Description</p>
                                            <p className="text-black">{step.description}</p>
                                        </time>
                                        </li>
                                    )
                                    )}
                                </ol>
                            </div>
                        : 
                            <div className='text-center'>
                                <CircularProgress />
                            </div>
                        }
                    </div>
                </div>
                </div>
            </div>
            <div className='bg-black bg-opacity-50 fixed inset-0 z-20'></div>
        </>
    )
}

