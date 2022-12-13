
export const convertTo12HourFormat = timeString => {
  const timeString12 = new Date(
    "1970-01-01T" + timeString + "Z"
  ).toLocaleTimeString(
    {},
    { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
  );

  return timeString12;
};

export const convertTo24HourFormat = timeString => {
  const [time, modifier] = timeString.split(" ");
  let [hours, minutes] = time.split(":");

  if (hours < parseInt("10")) {
    hours = "0" + hours;
  }

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "pm") {
    hours = parseInt(hours) + 12;
  }

  return `${hours}:${minutes}:00`;
};

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Check if object is empty
export const isObjectEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

// Generate 9 random digits
export const generateNineRanNum = () => {
  return Math.floor(Math.random() * 1000000000);
};

