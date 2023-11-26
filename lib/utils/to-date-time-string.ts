export const toDateTimeString = (date?: Date) => {
  if (!date) return "";

  const _date = new Date(date);
  return `${_date.toDateString()}, ${_date.toLocaleTimeString()}`;
};
