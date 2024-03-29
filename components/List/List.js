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
    handleEditDone(id, formData);
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
    <>
      <StyledH1>Your planned Activities:</StyledH1>

      <ul aria-label="List of planned Activities">
        {activities?.map(({ id, date, time, name }) => (
          <li key={id}>
            {editing === id ? (
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
                <button
                  aria-label="end-editing"
                  type="submit"
                  onClick={() => handleEditDone(id)}
                >
                  Done
                </button>
              </StyledEditForm>
            ) : (
              <>
                <h2 aria-label="Name of Activity">{name}</h2>
                <p aria-label="date of planned Activity">
                  {date?.slice(8, 10)}.{date?.slice(5, 7)}.{date?.slice(0, 4)}
                </p>
                <p aria-label="time of planned Activity">{time}</p>
                <StyledDeleteButton
                  aria-label="delete-button"
                  type="button"
                  onClick={() => onDeleteActivity(id)}
                >
                  X
                </StyledDeleteButton>
                <button aria-label="open-editing" onClick={() => onEditing(id)}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
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
