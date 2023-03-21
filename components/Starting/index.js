import Lottie from "lottie-react";
import animationData from "../../public/weather-animation1.json";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Start() {
  const router = useRouter();
  setTimeout(() => router.push("/homepage"), 3000);
  return (
    <StyledDiv>
      <h1>WeatherPlanar</h1>
      <StyledLottie animationData={animationData} loop />
      <p>Loading. . .</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
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
