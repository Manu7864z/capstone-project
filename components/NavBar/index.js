import Link from "next/link";
import styled from "styled-components";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { RiCalendarTodoFill, RiCalendarTodoLine } from "react-icons/ri";
import { BsFilePersonFill, BsFilePerson } from "react-icons/bs";
import { useRouter } from "next/router";
import { StyledNav } from "@/styles";

export default function Navbar({ pathname }) {
  const { push } = useRouter();

  return (
    <StyledNav>
      <StyledLink
        href="/activitiesForm"
        onClick={() => {
          push("/activitiesForm");
        }}
      >
        {pathname === "/activitiesForm" ? (
          <RiCalendarTodoFill />
        ) : (
          <RiCalendarTodoLine />
        )}
      </StyledLink>
      <StyledLink
        href="/"
        onClick={() => {
          push("/");
        }}
      >
        {pathname === "/" ? <AiFillHome /> : <AiOutlineHome />}
      </StyledLink>
      <StyledLink
        href="/about"
        onClick={() => {
          push("/about");
        }}
      >
        {pathname === "/about" ? <BsFilePersonFill /> : <BsFilePerson />}
      </StyledLink>
    </StyledNav>
  );
}

const StyledLink = styled(Link)`
  color: var(--color-primary);
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: var(--border-radius);
  box-shadow: 0px 35px 68px 0px rgba(10, 17, 40, 0.5),
    inset 0px -5px 16px 0px rgba(10, 17, 40, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  text-decoration: none;
  height: 30px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 5px 10px 3px 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.4 ease-in-out;
  &:hover {
    background-color: var(--color-tertiary);
    color: var(--color-primary);
  }
`;
