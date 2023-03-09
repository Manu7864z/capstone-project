import { useState } from "react";
import { useRouter } from "next/router";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

export default function Home({ data, activities }) {
  const router = useRouter();
  const [weekDay, setWeekDay] = useState(
    new Date().toLocaleDateString("default", { year: "numeric" }) +
      "-" +
      new Date().toLocaleDateString("default", { month: "2-digit" }) +
      "-" +
      new Date().toLocaleDateString("default", { day: "2-digit" })
  );

  const [showCalendar, setShowCalendar] = useState(false);
  console.log(weekDay);

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setWeekDay(
      date.toLocaleDateString("default", { year: "numeric" }) +
        "-" +
        date.toLocaleDateString("default", { month: "2-digit" }) +
        "-" +
        date.toLocaleDateString("default", { day: "2-digit" })
    );
    setShowCalendar(!showCalendar);
  };

  return (
    <main>
      <h3>Weather Condition today: {data.current.condition.text} </h3>
      <h4>Temperature: {data.current.temp_c} °C</h4>
      <p>Check your planned Activities:</p>
      <StyledButton type="button" onClick={handleShowCalendar}>
        Open Calendar
      </StyledButton>

      {showCalendar ? <StyledCalendar onClickDay={handleDateChange} /> : null}

      <ul>
        {activities.map((activity) => {
          console.log(activity.date, weekDay);
          if (activity.date === weekDay) {
            return (
              <li key={activity.id}>
                <h2>{activity.name}</h2>
                <p>{activity.date}</p>
                <p>{activity.time}</p>
                <input type="checkbox" />
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>

      <button type="button" onClick={() => router.push("/activitiesForm")}>
        Neue Aktivitäten erstellen
      </button>
    </main>
  );
}

const StyledButton = styled.button`
  position: absolute;
  top: 200px;
  right: 50px;
`;

const StyledCalendar = styled(Calendar)`
  height: 290px;
  width: 230px;
  display: block;
  position: absolute;
  top: 230px;
  right: 20px;
  border: 3px outset grey;
  border-radius: 5px;
  background-color: white;
  box-shadow: 5px 5px 5px grey;

  .react-calendar__navigation {
    background-color: lightcoral;
  }
`;
