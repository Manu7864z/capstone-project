import Link from "next/link";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiCalendarTodoFill } from "react-icons/ri";
import { RiCalendarTodoLine } from "react-icons/ri";
import { BsFilePersonFill } from "react-icons/bs";
import { BsFilePerson } from "react-icons/bs";

export default function Navbar() {
  const [home, setHome] = useState(false);
  const [newTodo, setNewTodo] = useState(false);
  const [about, setAbout] = useState(false);

  function handleNavigation() {
    setHome(false);
    setNewTodo(false);
    setAbout(false);
  }

  return (
    <StyledNav>
      <StyledLink
        href="/activitiesForm"
        onClick={() => {
          handleNavigation();
          setNewTodo((prevState) => !prevState);
        }}
      >
        {newTodo ? <RiCalendarTodoFill /> : <RiCalendarTodoLine />}
      </StyledLink>
      <StyledLink
        href="/"
        onClick={() => {
          handleNavigation();
          setHome((prevState) => !prevState);
        }}
      >
        {home ? <AiFillHome /> : <AiOutlineHome />}
      </StyledLink>
      <StyledLink
        href="/"
        onClick={() => {
          handleNavigation();
          setAbout((prevState) => !prevState);
        }}
      >
        {about ? <BsFilePersonFill /> : <BsFilePerson />}
      </StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1c1c1c;
  color: var(--color-secondary);
  border-top: 2px outset var(--color-secondary);
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 5px 10px 3px 10px;
  border-radius: 5px;
  border: 2px solid var(--color-secondary);
  transition: all 0.3 ease-in-out;
  &:hover {
    background-color: var(--color-secondary);
    color: var(--color-primary);
  }
`;
