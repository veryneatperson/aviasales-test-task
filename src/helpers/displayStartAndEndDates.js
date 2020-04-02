const convertMS = (milliseconds) => {
  let day, hours, minutes, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minutes = Math.floor(seconds / 60);
  seconds %= 60;
  hours = Math.floor(minutes / 60);
  minutes %= 60;
  day = Math.floor(hours / 24);
  hours %= 24;
  return {
    day,
    hours,
    minutes,
    seconds,
  };
};

const displayStartDateHoursAndMinutes = (ISOdate) => {
  const date = new Date(ISOdate);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  return `${hours}:${minutes}`;
};

const displayEndDateHoursAndMinutes = (ISOdate, duration) => {
  const startDateInMs = ((new Date(ISOdate)).getTime());
  const endDateInMs = startDateInMs + duration * 60 * 1000;
  const { hours, minutes } = convertMS(endDateInMs);
  return `${hours}:${minutes}`;
};

const displayStartAndEndDates = (ISOstartDate, duration) => (
  `${displayStartDateHoursAndMinutes(ISOstartDate)} - ${displayEndDateHoursAndMinutes(ISOstartDate, duration)}`
);

export default displayStartAndEndDates;
