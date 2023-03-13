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

  function handleEditDone(event, id, formData) {
    if (formData !== undefined) {
      setEditing(!editing);
      setActivities(
        activities.map((activity) => {
          console.log(activity.id, id);
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
  console.log(activities);

  return (
    <div>
      <h1>Your planned Actions</h1>
      <StyledUL>
        {activities?.map(({ id, date, time, name }) => (
          <li key={id}>
            <h2>{name}</h2>
            <p>
              {date.slice(8, 10)}.{date.slice(5, 7)}.{date.slice(0, 4)}
            </p>
            <p>{time}</p>
            <button onClick={() => onDeleteActivity(id)}>X</button>
            <button onClick={() => onEditing(id)}>Edit</button>
            {editing === false ? null : (
              <form onSubmit={(event) => handleSubmit(event, id)}>
                <fieldset>
                  <label htmlFor="name">Name of Activity: </label>
                  <input type="text" name="name" defaultValue={name} />
                  <label htmlFor="date">Date: </label>
                  <input type="date" name="date" defaultValue={date} />
                  <label htmlFor="time">Time: </label>
                  <input type="time" name="time" defaultValue={time} />
                  <button type="Submit">Done</button>
                </fieldset>
              </form>
            )}
          </li>
        ))}
      </StyledUL>
    </div>
  );
}

const StyledUL = styled.ul`
  margin-bottom: 55px;
`;
