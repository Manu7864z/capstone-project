import styled from "styled-components";

export default function WeatherData({ data, weatherData }) {
  return (
    <StyledData>
      <h3 aria-label="weather-condition-today">
        Condition: {data?.current.condition.text}{" "}
      </h3>
      <h4 aria-label="temperature-today">
        Temperature: {data?.current.temp_c} °C
      </h4>
      <h5 aria-label="3-days-forecast">Forecast for the next 3 days</h5>
      <StyledUl>
        {weatherData?.map(({ date, day }) => {
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
      <p aria-label="planned-activities">Check your planned Activities:</p>
    </StyledData>
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
      color: var(--color-primary);
      border: 1px solid whitesmoke;
      transform: scale(1.1);
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
