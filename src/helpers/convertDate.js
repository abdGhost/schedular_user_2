import moment from "moment";

export function elapsedTime(dates) {
  const date = moment(dates);

  const year = date.year();
  const month = date.month() + 1; // Adding 1 because months are zero-based
  const day = date.date();
  const hour = date.hour();
  const minute = date.minute();
  const second = date.second();

  return { year, month, day, hour, minute, second };
}
