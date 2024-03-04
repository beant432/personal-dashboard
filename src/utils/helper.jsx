import moment from "moment";

export const getDate = (dt, timezone) => {
  //UNIX timestamp to UTC + timezone
  let dateAndTime = moment
    .utc(dt, "X")
    .add(timezone, "seconds")
    .format("DD MMM hh:mm A");
  return dateAndTime;
};

export const kelToCel = (temp) => {
  return Math.floor(temp - 273.15);
};
