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
        {activities.map(({ time, date, name, id }) => {
          if (date === weekDay) {
            return (
              <li key={id}>
                <h2>{name}</h2>
                <p>
                  {date.slice(8, 10)}.{date.slice(5, 7)}.{date.slice(0, 4)}
                </p>
                <p>Um {time} Uhr</p>
                <StyledDiv>
                  <label htmlFor="checkbox">Done?</label>
                  <StyledCheckbox
                    id="checkbox"
                    name="checkbox"
                    type="checkbox"
                    onClick={() => handleCheckActivities(activity.id)}
                  />
                </StyledDiv>
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
  width: 250px;
  display: block;
  position: absolute;
  top: 230px;
  right: 20px;
  border: 3px outset grey;
  border-radius: 5px;
  background-color: var(--color-primary);
  color: var(--color-quinary);
  box-shadow: 5px 5px 5px grey;
  z-index: 1;

  .react-calendar__navigation {
    background-color: var(--color-tertiary);
  }

  .react-calendar__navigation__label {
    color: var(--color-quinary);
  }

  .react-calendar__navigation__arrow {
    color: var(--color-quinary);
  }

  .react-calendar__month-view__days__day {
    color: var(--color-quinary);

    &:hover {
      background-color: var(--color-secondary);
      color: var(--color-quaternary);
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--color-quinary);
  }

  .react-calendar__month-view__days__day--weekend {
    color: red;

    &:hover {
      background-color: var(--color-secondary);
      color: var(--color-quaternary);
    }
  }

  .react-calendar__month-view__days__day--today {
    color: var(--color-quinary);
    background-color: var(--color-quaternary);
  }

  .react-calendar__tile--now {
    background-color: var(--color-tertiary);
    color: var(--color-quinary);
  }
`;
const StyledCheckbox = styled.input`
  height: 20px;
  width: 20px;
  border: 2px solid var(--color-quaternary);

  &:checked {
    background-color: var(--color-quaternary);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 30px;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  background-color: var(--color-primary);
  color: var(--color-quinary);
`;
