import GlobalStyle from "@/styles";
import Head from "next/head";
import useSWR from "swr";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import Navbar from "@/components/NavBar";
import { useRouter } from "next/router";

const URL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}&q=Leipzig&days=3&aqi=no&alerts=no`;

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleDeleteActivity(idToRemove) {
    setActivities(activities.filter((activity) => activity.id !== idToRemove));
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>WeatherPlanar</title>
      </Head>
      <Heading>WeatherPlanar</Heading>
      <Component
        {...pageProps}
        data={data}
        activities={activities}
        setActivities={setActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Navbar pathname={pathname} />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  margin: 0 0 20px 0;
  padding: 0;
  position: relative;
  top: 5px;
  left: 20px;
  width: 90%;
  font-size: 3rem;
  font-weight: 400;
  color: var(--color-secondary);
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.9;
  border: 3px outset var(--color-secondary);
  border-radius: 5px;
  box-shadow: 0 2px 5px 2px var(--color-secondary);
`;
