export const getFormattedDate = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dt = new Date(date);
  let hr = dt.getHours();
  let mins = dt.getMinutes();
  if (hr < 10) {
    hr = `0${hr}`;
  }
  if (mins < 10) {
    mins = `0${mins}`;
  }

  return `${months[dt.getMonth()]} ${dt.getDate()}, at ${hr}:${mins}`;
};
