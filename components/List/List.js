export default function List({
  activities,
  onDeleteActivity,
  onEditActivity,
  updateActivities,
  editActivity,
  setEditActivity,
}) {
  function handleSave(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    form.reset();

    updateActivities({
      ...activities,
      name: formData.get("name"),
      date: formData.get("date"),
      time: formData.get("time"),
    });
    setEditActivity(!editActivity);
  }

  return (
    <div>
      <h1>Your planned Actions</h1>
      <ul>
        {activities.map((entry) => (
          <li key={entry.id}>
            <h2>{entry.name}</h2>
            <p>{entry.date}</p>
            <p>{entry.time}</p>
            <button onClick={() => onDeleteActivity(entry.id)}>X</button>
            <button onClick={() => onEditActivity(entry.id)}>Edit</button>
            {editActivity && activities.id === entry.id && (
              <form key={entry.id} onSubmit={handleSave}>
                <fieldset>
                  <label htmlFor="name">Name of Activity: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={entry.name}
                  />
                  <label htmlFor="date">Date: </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={entry.date}
                  />
                  <label htmlFor="time">Time: </label>
                  <input type="time" name="time" required value={entry.time} />
                </fieldset>
                <button type="submit">Save</button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
