import styled from "styled-components";

export default function List({
  activities,
  setActivities,
  onDeleteActivity,
  onEditing,
  setEditing,
  editing,
}) {
  function handleSubmit(event, id) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    handleEditDone(event, id, formData);
    form.reset();
  }

  function handleEditDone(id, formData) {
    if (formData !== undefined) {
      setEditing(!editing);
      setActivities(
        activities.map((activity) => {
          if (activity.id === id) {
            return {
              ...activity,
              name: formData.get("name"),
              date: formData.get("date"),
              time: formData.get("time"),
            };
          } else {
            return activity;
          }
        })
      );
    }
  }

  return (
    <div>
      <StyledH1>Your planned Activities:</StyledH1>
      <ul>
        {activities?.map(({ id, date, time, name }) => (
          <li key={id}>
            <h2>{name}</h2>
            <p>
              {date?.slice(8, 10)}.{date?.slice(5, 7)}.{date?.slice(0, 4)}
            </p>
            <p>{time}</p>
            <StyledDeleteButton
              type="Button"
              onClick={() => onDeleteActivity(id)}
            >
              X
            </StyledDeleteButton>

            <button onClick={() => onEditing(id)}>Edit</button>
            {editing === id && (
              <StyledEditForm
                key={id}
                onSubmit={(event) => handleSubmit(event, id)}
              >
                <label htmlFor="name">Name of Activity: </label>
                <input type="text" name="name" defaultValue={name} />
                <label htmlFor="date">Date: </label>
                <input type="date" name="date" defaultValue={date} />
                <label htmlFor="time">Time: </label>
                <input type="time" name="time" defaultValue={time} />
                <button type="Submit">Done</button>
              </StyledEditForm>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const StyledDeleteButton = styled.button`
  position: absolute;
  background: rgba(189, 29, 20, 0.5);
  right: -12px;
  top: -12px;
  font-weight: bold;
  transition: 0.4s;

  &:hover {
    background: rgba(189, 29, 20, 1);
  }
`;

const StyledH1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const StyledEditForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;

  label {
    margin: 2px;
  }
  input {
    margin: 2px;
  }
  button {
    margin: 2px;
  }
`;
