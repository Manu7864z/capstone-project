export default function AboutPage({ personalInfo, setPersonalInfo }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    setPersonalInfo({
      name: formData.get("name"),
      location: formData.get("location"),
    });
    form.reset();
    form.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name: </label>
      <input
        type="text"
        name="name"
        required
        defaultValue={personalInfo.name}
      />
      <p> Hello my name is {personalInfo.name}.</p>
      <label htmlFor="location">My recent location: </label>
      <select name="location" defaultValue={personalInfo.location}>
        <option value="Berlin">Berlin</option>
        <option value="Leipzig">Leipzig</option>
        <option value="value">Dresden</option>
        <option value="Köln">Köln</option>
        <option value="Hamburg">Hamburg</option>
        <option value="Magdeburg">Magdeburg</option>
        <option value="Hannover">Hannover</option>
        <option value="Kiel">Kiel</option>
        <option value="Stuttgart">Stuttgart</option>
        <option value="Potsdam">Potsdam</option>
        <option value="Wiesbaden">Wiesbaden</option>
        <option value="Schwerin">Schwerin</option>
        <option value="Mainz">Mainz</option>
        <option value="Saarbrücken">Saarbrücken</option>
        <option value="Erfurt">Erfurt</option>
      </select>
      <p> Today I am in {personalInfo.location}.</p>
      <button type="submit">Save</button>
    </form>
  );
}
