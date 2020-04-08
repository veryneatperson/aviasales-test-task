const displayStartTime = (ISOdate) => {
  const date = new Date(ISOdate);
  const strHours = date.getUTCHours().toString();
  const strMinutes = date.getUTCMinutes().toString();
  return `${strHours.padStart(2, '0')}:${strMinutes.padStart(2, '0')}`;
};

const displayEndTime = (ISOdate, duration) => {
  const startTime = new Date(ISOdate).getTime();
  const endTime = new Date(startTime + duration * 60 * 1000);
  const strHours = endTime.getUTCHours().toString();
  const strMinutes = endTime.getUTCMinutes().toString();
  return `${strHours.padStart(2, '0')}:${strMinutes.padStart(2, '0')}`;
};

const displayTime = (ISOstartDate, duration) => {
  const start = displayStartTime(ISOstartDate);
  const end = displayEndTime(ISOstartDate, duration);
  return `${start} - ${end}`;
};

export default displayTime;
