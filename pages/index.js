import { useState } from "react";
import { useRouter } from "next/router";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

export default function Home({ data, activities, onDeleteActivity }) {
  const router = useRouter();
  const [checkedActivities, setCheckedActivities] = useState(false);
  const [weekDay, setWeekDay] = useState(
    new Date().toLocaleDateString("default", { year: "numeric" }) +
      "-" +
      new Date().toLocaleDateString("default", { month: "2-digit" }) +
      "-" +
      new Date().toLocaleDateString("default", { day: "2-digit" })
  );

  const [showCalendar, setShowCalendar] = useState(false);

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

  const handleCheckActivities = (id) => {
    setCheckedActivities(!checkedActivities);
    onDeleteActivity(id);
  };

  return (
    <StyledMain>
      <h3>Weather Condition today: {data?.current.condition.text} </h3>
      <h4>Temperature: {data?.current.temp_c} °C</h4>
      <p>Check your planned Activities:</p>
      <StyledButton type="button" onClick={handleShowCalendar}>
        {weekDay.slice(8, 10)}.{weekDay.slice(5, 7)}.{weekDay.slice(0, 4)}
      </StyledButton>

      {showCalendar ? <StyledCalendar onClickDay={handleDateChange} /> : null}

      <ul>
        {activities.map((activity) => {
          if (activity.date === weekDay) {
            return (
              <li key={activity.id}>
                <h2>{activity.name}</h2>
                <p>{activity.date}</p>
                <p>{activity.time}</p>
                <input
                  type="checkbox"
                  onClick={() => handleCheckActivities(activity.id)}
                />
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
    </StyledMain>
  );
}

const StyledMain = styled.main`
  margin-bottom: 55px;
`;

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
  background-color: var(--color-primary);
  color: var(--color-secondary);
  box-shadow: 5px 5px 5px grey;

  .react-calendar__navigation {
    background-color: var(--color-secondary);
  }

  .react-calendar__navigation__label {
    color: var(--color-primary);
  }

  .react-calendar__navigation__arrow {
    color: var(--color-primary);
  }

  .react-calendar__month-view__days__day {
    color: var(--color-secondary);

    &:hover {
      background-color: var(--color-secondary);
      color: var(--color-primary);
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--color-secondary);
  }

  .react-calendar__month-view__days__day--weekend {
    color: red;

    &:hover {
      background-color: var(--color-secondary);
      color: var(--color-primary);
    }
  }

  .react-calendar__month-view__days__day--today {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }

  .react-calendar__tile--now {
    background-color: var(--color-secondary);
    color: var(--color-primary);
  }
`;
