const displayDuration = (duration) => {
  const strHours = Math.floor(duration / 60).toString();
  const strMins = (duration % 60).toString();
  return `${strHours.padStart(2, '0')}ч ${strMins.padStart(2, '0')}м`;
};

export default displayDuration;
