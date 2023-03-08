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
    console.log(formData);
    handleEditDone(event, id, formData);
    form.reset();
  }

  // funktioniert, aber gibt jedem input den gleichen wert, aus dem Feld in dem man Enter gedrückt hat

  function handleEditDone(event, id, formData) {
    console.log(formData);
    console.log(event);
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
      <ul>
        {activities?.map((entry) => (
          <li key={entry.id}>
            {/* {console.log(id)} */}
            <h2>{entry.name}</h2>
            <p>{entry.date}</p>
            <p>{entry.time}</p>
            <button onClick={() => onDeleteActivity(entry.id)}>X</button>
            <button onClick={() => onEditing(entry.id)}>Edit</button>
            {editing === false ? null : (
              <form onSubmit={(event) => handleSubmit(event, entry.id)}>
                <fieldset>
                  <label htmlFor="name">Name of Activity: </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={entry.name}
                    /* onKeyDown={(event) => handleEditDone(event, entry.id)} */
                  />
                  <label htmlFor="date">Date: </label>
                  <input
                    type="date"
                    name="date"
                    defaultValue={entry.date}
                    /* onKeyDown={(event) => handleSubmit(event, entry.id)} */
                  />
                  <label htmlFor="time">Time: </label>
                  <input
                    type="time"
                    name="time"
                    defaultValue={entry.time}
                    /* onKeyDown={(event) => handleEditDone(event, entry.id)} */
                  />
                  <button type="Submit">Done</button>
                </fieldset>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
