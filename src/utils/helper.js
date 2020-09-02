export const formatDate = dateStr => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(dateStr).toLocaleDateString("en-US", options);
};

export const getDayFromDate = dateStr => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];
  const date = new Date(dateStr);
  return {
    day: date.getDate(),
    month: monthNames[date.getMonth()]
  };
};
