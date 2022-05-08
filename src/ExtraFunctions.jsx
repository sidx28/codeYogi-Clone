import { DateTime } from "luxon";
export const convertToRedableDate = (date) => {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATE_HUGE);
};

export const convertToRedableDuration = (startTime, endTime) => {
  return DateTime.fromISO(endTime)
    .diff(DateTime.fromISO(startTime))
    .toFormat("hh:mm:ss");
};
