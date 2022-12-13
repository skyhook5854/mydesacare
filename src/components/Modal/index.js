import React from "react";

export const CustomModal = ({ action, title, content }) => {
  
  return (
    <>
    <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        // onClick={() => action()}
        style={{zIndex:'1400'}}
    >
        <div className="relative w-full px-5 md:w-1/2 md:px-0 my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between px-5 py-3 border-b border-solid border-blueGray-200 rounded-t">
                <h6 className="text-lg font-semibold">
                    {title}
                </h6>
                {/* <button
                    className="-mt-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => action()}
                >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                    </span>
                </button> */}
            </div>
            {content}
        </div>
        </div>
    </div>
    <div className="bg-black bg-opacity-50 fixed inset-0 z-40" style={{zIndex:'1300'}}></div>
    </>
  );
};
