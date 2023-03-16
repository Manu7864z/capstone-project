import { uid } from "uid";
import styled from "styled-components";

export default function ActivitiesForm({ setActivities, activities }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    setActivities([
      ...activities,
      {
        id: uid(),
        name: formData.get("name"),
        date: formData.get("date"),
        time: formData.get("time"),
      },
    ]);
    form.reset();
    form.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledFormElements>
        <Styledh1>Add new Activities below: </Styledh1>
        <label htmlFor="name">Name of Activity: </label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="date">Date: </label>
        <input type="date" id="date" name="date" required />
        <label htmlFor="time">Time: </label>
        <input type="time" name="time" required />
      </StyledFormElements>
      <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
    </form>
  );
}

const StyledSubmitButton = styled.button`
  background-color: rgba(3, 182, 3, 0.3);
  border: 1px solid rgba(3, 182, 3, 0.5);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: rgba(3, 182, 3, 0.5);
    border: 1px solid rgba(3, 182, 3, 0.5);
  }
`;

const StyledFormElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px 10px 0 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background: rgba(17, 17, 17, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);

  label {
    font-size: 1.2rem;
    font-weight: 200;
    color: var(--color-quinary);
    margin: 5px;
  }
`;

const Styledh1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-quinary);
  margin: 5px;
`;
