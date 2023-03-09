import GlobalStyle from "@/styles";
import Head from "next/head";
import useSWR from "swr";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

const URL = `http://api.weatherapi.com/v1/forecast.json?key=552906322dc9408a883144606230903&q=Leipzig&days=3&aqi=no&alerts=no`;

export default function App({ Component, pageProps }) {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const fetcher = (url) => fetch(url).then((res) => res.json());

  /*  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  }; */

  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);

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
      />
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
  color: lightskyblue;
  background-color: darkblue;
  opacity: 0.9;
  border: 3px outset white;
  border-radius: 5px;
  box-shadow: 0 5px 5px 2px grey;
`;
