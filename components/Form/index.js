export default function ActivitiesForm({ setActivities, activities }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    setActivities([
      ...activities,
      {
        name: formData.get("name"),
        date: formData.get("date"),
        time: formData.get("time"),
      },
    ]);
    form.reset();
    form.name.focus();
  }
  console.log(activities);
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h1>Add new Activities</h1>
        <label htmlFor="name">Name of Activity: </label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="date">Date: </label>
        <input type="date" id="date" name="date" required />
        <label htmlFor="time">Time: </label>
        <input type="time" name="time" required />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
