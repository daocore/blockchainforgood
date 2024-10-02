
export function getTimeZone(timestamp: string) {
  var date = new Date(parseInt(timestamp));

  var timezoneOffset = date.getTimezoneOffset();
  var timezoneOffsetHours = Math.abs(Math.floor(timezoneOffset / 60));
  var timezoneSign = timezoneOffset > 0 ? "-" : "+";
  var timezone = `${timezoneSign}${timezoneOffsetHours}`;
  return timezone;
}

export function getTime(timestamp: string) {
  var date = new Date(parseInt(timestamp));
  var hours = date.getHours();
  var minutes = date.getMinutes();

  var formattedDateTime = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;

  return formattedDateTime;
}

export function getTimeData(timestamp: string) {
  var date = new Date(parseInt(timestamp));
  var year = date.getFullYear();
  var month = date.toLocaleString("en-us", { month: "short" });
  var day = date.getDate();
  var formattedDateTime = `${day < 10 ? "0" + day : day} ${month} , ${year}`;
  return formattedDateTime;
}