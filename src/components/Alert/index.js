export const CustomAlert = ({ type, message }) => {
  let className = "";
  switch (type) {
    case "error":
      className =
        "flex p-4 mb-4 text-red-700  bg-red-100 rounded-lg dark:bg-red-200";
      break;
    case "success":
      className =
        "flex p-4 mb-4 text-green-700 bg-green-100 rounded-lg dark:bg-green-200";
      break;
    case "info":
      className =
        "flex p-4 mb-4  text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200";
      break;
    default:
      break;
  }
  return (
    <div class={className}>
      <span class="font-medium">{message} </span>
    </div>
  );
};
