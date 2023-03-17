import { useState } from "react";
import { useRouter } from "next/router";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

export default function Home({ data, activities, onDeleteActivity }) {
  const router = useRouter();
  const weatherData = data.forecast.forecastday;
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
      <StyledData>
        <h3>Weather today: {data?.current.condition.text} </h3>
        <h4>Temperature: {data?.current.temp_c} °C</h4>
        <h5>Forecast for the next 3 days</h5>
        <StyledUl>
          {weatherData?.map(({ date, day }) => {
            console.log(day);
            return (
              <li key={date}>
                <p>
                  {date.slice(8, 10)}.{date.slice(5, 7)}.{date.slice(0, 4)}
                </p>
                <p>{day.maxtemp_c} °C</p>
                <p>{day.condition.text}</p>
              </li>
            );
          })}
        </StyledUl>
        <p>Check your planned Activities:</p>
      </StyledData>
      <StyledCalendarButton type="button" onClick={handleShowCalendar}>
        Today: {weekDay.slice(8, 10)}.{weekDay.slice(5, 7)}.
        {weekDay.slice(0, 4)}
      </StyledCalendarButton>

      {showCalendar ? <StyledCalendar onClickDay={handleDateChange} /> : null}

      <ul>
        {activities.map(({ time, date, name, id }) => {
          if (date === weekDay) {
            return (
              <li key={id}>
                <h2>{name}</h2>
                <p>
                  Date: {date.slice(8, 10)}.{date.slice(5, 7)}.
                  {date.slice(0, 4)}
                </p>
                <p>Time: {time} Uhr</p>
                <StyledDiv>
                  <label htmlFor="checkbox">Done?</label>
                  <StyledCheckbox
                    id="checkbox"
                    name="checkbox"
                    type="checkbox"
                    onClick={() => handleCheckActivities(id)}
                  />
                </StyledDiv>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>

      <StyledButton
        type="button"
        onClick={() => router.push("/activitiesForm")}
      >
        Add new ToDo +
      </StyledButton>
    </StyledMain>
  );
}

const StyledUl = styled.ul`
  display: flex;
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100px;
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;

    &:hover {
      background-color: var(--color-tertiary);
      color: var(--color-primary);
      border: 2px outset whitesmoke;
    }
  }

  p {
    margin: 0;
    font-size: 0.6rem;
  }
`;

const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  margin: 20px;
  width: 90%;
  color: var(--color-quinary);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.67);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.18);

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  h4 {
    margin: 10px 0 0 0;
    font-size: 1rem;
    color: var(--color-quinary);
  }
`;

const StyledMain = styled.main`
  margin-bottom: 55px;
`;

const StyledCalendarButton = styled.button`
  position: absolute;
  top: 360px;
  left: 192px;
  width: 159.75px;
  &:hover {
    background-color: var(--color-primary);
  }
`;

const StyledButton = styled.button`
  position: absolute;
  top: 360px;
  left: 15px;
  width: 159.75px;

  &:hover {
    background-color: var(--color-primary);
  }
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
