import styled from "styled-components";

export default function DailyList({
  hasActivities,
  activitiesForDay,
  handleCheckActivities,
}) {
  return (
    <ul aria-label="list-of-todays-activities">
      {hasActivities ? (
        activitiesForDay.map(({ time, date, name, id }) => (
          <li key={id}>
            <h2>{name}</h2>
            <p>
              Date: {date.slice(8, 10)}.{date.slice(5, 7)}.{date.slice(0, 4)}
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
        ))
      ) : (
        <li aria-label="nothing-planned-yet">
          <h2>Nothing planned today 😱</h2>
        </li>
      )}
    </ul>
  );
}
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
