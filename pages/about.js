import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

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
    <>
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
        <StyledButton type="submit">Save</StyledButton>
      </StyledForm>
      <StyledSection>
        <h2>Check out my Channels: </h2>
        <StyledDiv>
          <StyledLink href="https://github.com/Manu7864z">
            <AiFillGithub />
          </StyledLink>
          <StyledLink href="https://www.linkedin.com/in/manuel-zropf-620500213/">
            <AiFillLinkedin />
          </StyledLink>
        </StyledDiv>
        <p>By Manuel Zropf</p>
      </StyledSection>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px 10px 0 10px;
  padding: 10px;
  color: var(--color-quinary);
  background: rgba(17, 17, 17, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.18);

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

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  padding: 10px;

  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin: 10px;
  color: var(--color-quinary);
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

const StyledButton = styled.button`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
