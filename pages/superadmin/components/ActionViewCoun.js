import { Formik } from 'formik';
import moment from 'moment';
import Link from 'next/link';
import { useCounselorUpdate, useCounselorDelete } from 'src/actions/counselor';


export default function ActionViewCoun(props){
    console.log('new', props);
    const { mutate, error, isError, isLoading: isButtonLoading } = useCounselorUpdate();
    const { mutate:mutate_new } = useCounselorDelete();

const onSubmit = async (values) => {
    values['join_date'] = moment(values['jon_date']).format('YYYY-MM-DD HH:mm');
    console.log('data', values);
    // return false;

    await mutate(values);
    props.onHandlerModal(false, []);
  };

const deleteAccount = async (id) => {
    await mutate_new(id);
    props.onHandlerModal(false, []);
}

return (
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
                    Counselor Details
                  </h3>
                  <div className='flex justify-between border-b py-2'>
                    <div className='flex items-center gap-2 mb-2'>
                      <Link href=''>
                        <span className='bg-gray-200 flex items-center justify-center border w-10 h-10  rounded-full'>
                          <img
                            className='rounded-full'
                            src={props?.dataCouns.profile_img ? 'https://www.mydesa.my/v2/'+props?.dataCouns.profile_img : '/img/team-1-800x800.jpg'}
                            alt=''
                          />
                        </span>
                      </Link>
                      <div className='flex flex-col text-xs'>
                        <h4>{props?.dataCouns.name ? props.dataCouns.name : 'Counsellor'}</h4>
                        <h5>{props?.dataCouns.email}</h5>
                      </div>
                    </div>
                    {/* <div className='flex'>
                      <button
                        type='button'
                        className='relative  inline-flex gap-2 items-center justify-center px-3 overflow-hidden text-xs font-medium text-gray-900 rounded-md border'>
                        <i class="fa fa-certificate" aria-hidden="true"></i>
                        <span className='text-xs'>Anxiety</span>
                      </button>
                    </div> */}
                  </div>
                  <Formik
                        enableReinitialize
                        validateOnChange={false}
                        validateOnBlur={false}
                        initialValues={{
                            id: props.dataCouns.id,
                            join_date: moment(props.dataCouns.created_at).format('DD/MM/YYYY hh:mm A'),
                            contact_no: props?.dataCouns.phone_no,
                            password: props.dataCouns.password,
                            disabled_match: props.dataCouns.match_disabled
                        }}
                        onSubmit={onSubmit}>
                    {(form) => (
                        <form className='space-y-6 py-4' onSubmit={form.handleSubmit}>
                            <div>
                            <label
                                htmlFor='datetime'
                                class='block mb-2 text-sm font-medium text-gray-900'>
                                Join Date
                            </label>
                            <input
                                type='text'
                                name='join_date'
                                id='join_date'
                                value={form.values.join_date}
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
                                value={form.values.contact_no}
                                onChange={form.handleChange}
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
                                value={form.values.password}
                                onChange={form.handleChange}
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
                            {/* <div className='flex justify-between'>
                            <label>Disable match</label>
                            <label class='flex relative cursor-pointer  justify-end mr-4'>
                                <input
                                
                                    checked={form.values.disabled_match ? true : false }
                                    name="disabled_match"
                                    type='checkbox'
                                    onChange={(e) => console.log(e.target.value)}
                                    onBlur={form.handleBlur}
                                    class='sr-only'
                                    value="1"
                                />

                                <div class='w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600'></div>
                            </label>
                            </div> */}
                            <div className='flex items-center gap-2 py-4'>
                                <button type='submit' className='w-1/2 border font-medium rounded-lg text-sm px-4 py-1 text-center'>
                                    Update
                                </button>
                                <a onClick={() => deleteAccount(props?.dataCouns.id)}
                                className='w-1/2 text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-1 text-center'>
                                Delete account  
                                </a>
                            </div>
                        </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-black bg-opacity-50 fixed inset-0 z-20'></div>
    </>
    )
}