import { Formik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react'
import { useBookingInvitation } from 'src/actions/appointment';

export default function ActionInvited(props) {
    const { mutate, error, isError, isLoading: isButtonLoading } = useBookingInvitation();

    const onSubmit = async (values) => {
        console.log('data', values);
        // return false;
        await mutate(values);
        props.onHandlerModal(false, []);
    };

    console.log('props : ',props);
    return (
    <>
  
       
    <div aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-40 right-0 left-20 z-40 w-full h-modal md:h-full">
        <div className="mx-auto relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
                <button onClick={() => props.onHandlerModal(false, [])} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
                <div className="py-6 px-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900">
                        Send invitation
                    </h3>
                    <Formik
                        enableReinitialize
                        validateOnChange={false}
                        validateOnBlur={false}
                        initialValues={{
                            appointments_id : props.dataBooking.id,
                            emailto : props.dataBooking.email,
                            meetlink : '',
                            note : props.dataBooking.notes,
                            schedule : moment(props.dataBooking.date).format('DD/MM/YYYY')+' '+props.dataBooking.time
                        }}
                    onSubmit={onSubmit}>
                        {(form) => (
                            <form className="space-y-6" onSubmit={form.handleSubmit}>
                                <div>
                                    <input type="hidden" name="id" value={form.values.appointment_id} />
                                    <label className="text-xs">Email to</label>
                                    <input type="text" name="emailto" id="emailto" value={form.values.emailto} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required disabled />
                                </div>
                                <div>
                                    <label className="text-xs">Meeting link</label>
                                    <input type="text" name="meetlink" id="meetlink" onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.meetlink} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                </div>
                                <div>
                                    <label className="text-xs">Schedule</label>
                                    <input type="text" name="datetime" value={form.values.schedule} id="datetime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled />
                                </div>

                                <div>
                                    <label className="text-xs">Note</label>
                                    <textarea type="text" name="note" onChange={form.handleChange} onBlur={form.handleBlur} id="note" value={form.values.note} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                </div>
                                <button type="submit" className="w-full text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-1 text-center">
                                    Send invitation
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
  )
}
