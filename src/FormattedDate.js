import React from "react";

export default function FormattedDate(props) {
  let months = [
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
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let dayOfMounth = props.date.getDate();
  return (
    <div>
      {day}, {month} {dayOfMounth}, {year}
    </div>
  );
}
