import { img_url_root } from "src/config";

export function ToggleButton({ name, logo, onChange, id, companyList }) {
  return (
    <div class="flex flex-row items-center w-auto border-b-2 mt-4 justify-items-center">
      <img
        class="mb-3 w-10 h-10 square-full shadow-lg self-start flex ml-4"
        src={`${img_url_root}/${logo}`}
      />
      <div class="text-sm self-start ml-4 flex-1 mt-2">{name}</div>
      {/* <input
        type="checkbox"
        class="w-7 h-7 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input> */}
      <label class="flex relative cursor-pointer  justify-end mr-4">
        <input
          type="checkbox"
          class="sr-only"
          value={id}
          onChange={onChange}
        />

        <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
      </label>
    </div>
  );
}
