import styled from "styled-components";

export default function AboutPage({ personalInfo, setPersonalInfo }) {
  const { name, location } = personalInfo;

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
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" name="name" required defaultValue={name} />
      <p> Hello my name is {name}. 😁</p>
      <label htmlFor="location">My recent location: </label>
      <select name="location" defaultValue={location}>
        <option value="Berlin">Berlin</option>
        <option value="Leipzig">Leipzig</option>
        <option value="Dresden">Dresden</option>
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
      <p> Today I am in {location}. 🚀</p>
      <button type="submit">Save</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px 10px 0 10px;
  padding: 10px;

  label {
    margin: 10px;
  }
  input {
    margin: 10px;
  }
  select {
    margin: 10px;
  }
  button {
    margin: 10px;
  }
  p {
    margin: 10px;
  }
`;
