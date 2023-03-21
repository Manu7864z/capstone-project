import GlobalStyle from "@/styles";
import Head from "next/head";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import Navbar from "@/components/NavBar";
import { useRouter } from "next/router";
import { StyledHeader } from "@/styles";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const [personalInfo, setPersonalInfo] = useLocalStorageState("personalInfo", {
    defaultValue: { name: "", location: "Leipzig" },
  });

  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}&q=${personalInfo?.location}&days=3&aqi=no&alerts=no`;

  const { pathname } = useRouter();
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <StyledLoadingDiv>
        <p>Loading...</p>
      </StyledLoadingDiv>
    );

  function handleDeleteActivity(idToRemove) {
    setActivities(activities.filter((activity) => activity.id !== idToRemove));
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>WeatherPlanar</title>
      </Head>
      {pathname === "/" ? null : <StyledHeader>WeatherPlanar</StyledHeader>}
      <Component
        {...pageProps}
        data={data}
        activities={activities}
        setActivities={setActivities}
        onDeleteActivity={handleDeleteActivity}
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      {pathname === "/" ? null : <Navbar pathname={pathname} />}
    </>
  );
}

const StyledLoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 130vh;
  width: 130vw;

  background: rgb(10, 17, 40);
  background: -moz-linear-gradient(
      15deg,
      rgba(10, 17, 40, 1) 22%,
      rgba(0, 31, 84, 1) 66%,
      rgba(3, 64, 120, 1) 91%
    )
    center center fixed no-repeat;
  background: -webkit-linear-gradient(
      15deg,
      rgba(10, 17, 40, 1) 22%,
      rgba(0, 31, 84, 1) 66%,
      rgba(3, 64, 120, 1) 91%
    )
    center center fixed no-repeat;
  background: linear-gradient(
      15deg,
      rgba(10, 17, 40, 1) 22%,
      rgba(0, 31, 84, 1) 66%,
      rgba(3, 64, 120, 1) 91%
    )
    center center fixed no-repeat;

  background-size: cover;

  p {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--color-quinary);
  }
`;
