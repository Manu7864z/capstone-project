import Lottie from "lottie-react";
import animationData from "../../public/weather-animation1.json";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Start() {
  const router = useRouter();

  return (
    <StyledMain>
      <h1>WeatherPlanar</h1>
      <StyledLottie animationData={animationData} loop />
      <StyledDiv>
        <p>
          Hello there! In this Web-App you can plan your days and check out the
          weather regarding your recent location.
        </p>
      </StyledDiv>
      <StyledButton onClick={() => router.push("/homepage")}>
        Get Started!
      </StyledButton>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  height: 100%;
  width: 100%;

  p {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
const StyledLottie = styled(Lottie)`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
`;

const StyledButton = styled.button`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: rgba(17, 17, 17, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);

  p {
    margin: 10px;
    font-size: 1.2rem;
    font-weight: 200;
  }
`;
