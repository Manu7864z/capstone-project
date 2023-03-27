import { useState } from "react";
import { useRouter } from "next/router";
import "react-calendar/dist/Calendar.css";
import WeatherData from "@/components/WeatherData";
import DailyList from "@/components/DailyList";
import {
  StyledCalendar,
  StyledCalendarButton,
  StyledButton,
  StyledMain,
} from "@/styles";

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
  const hasActivities = activities.some(({ date }) => date === weekDay);
  const activitiesForDay = activities.filter(({ date }) => date === weekDay);

  const [isCalenderVisiable, setIsCalenderVisiable] = useState(false);

  const handleShowCalendar = () => {
    setIsCalenderVisiable(!isCalenderVisiable);
  };

  const handleDateChange = (date) => {
    setWeekDay(
      date.toLocaleDateString("default", { year: "numeric" }) +
        "-" +
        date.toLocaleDateString("default", { month: "2-digit" }) +
        "-" +
        date.toLocaleDateString("default", { day: "2-digit" })
    );
    setIsCalenderVisiable(!isCalenderVisiable);
  };

  const handleCheckActivities = (id) => {
    setCheckedActivities(!checkedActivities);
    onDeleteActivity(id);
  };

  return (
    <StyledMain>
      <WeatherData data={data} weatherData={weatherData} />
      <StyledCalendarButton
        aria-label="open-calendar"
        type="button"
        onClick={handleShowCalendar}
      >
        Today: {weekDay.slice(8, 10)}.{weekDay.slice(5, 7)}.
        {weekDay.slice(0, 4)}
      </StyledCalendarButton>
      {isCalenderVisiable ? (
        <StyledCalendar aria-label="calendar" onClickDay={handleDateChange} />
      ) : null}
      <DailyList
        hasActivities={hasActivities}
        activitiesForDay={activitiesForDay}
        handleCheckActivities={handleCheckActivities}
      />
      <StyledButton
        type="button"
        onClick={() => router.push("/activitiesForm")}
      >
        Add new ToDo +
      </StyledButton>
    </StyledMain>
  );
}
