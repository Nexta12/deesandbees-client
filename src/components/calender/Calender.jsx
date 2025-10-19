import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import styles from "./Calender.module.scss";

const Calender = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className={styles.calenderContainer}>

      <Calendar
        onChange={handleChange}
        value={date}
        className={styles.reactCalendar}
      />

      <div className={styles.selectedDate}>
        <strong>Today's Date:</strong>{" "}
        {Array.isArray(date)
          ? `${date[0].toDateString()} – ${date[1].toDateString()}`
          : date.toDateString()}
      </div>
    </div>
  );
};

export default Calender;
