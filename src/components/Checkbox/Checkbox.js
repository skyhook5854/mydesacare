import React from "react";

const Checkbox = ({ checked, onChange }) => {
  const checkboxStyle = {};

  return (
    <>
      {/* <div className={`checkbox ${checked ? "active" : ""}`} onClick={onChange} /> */}
      <div className="flex items-center">
        <input
          id="checkbox-all"
          type="checkbox"
          className={` 
            ${checked ? "active" : ""}`}
          onClick={onChange}
          // className="w-4 h-4 text-primary bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
    </>
  );
};

export default Checkbox;
