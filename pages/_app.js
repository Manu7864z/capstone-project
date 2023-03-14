import GlobalStyle from "@/styles";
import Head from "next/head";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import Navbar from "@/components/NavBar";
import { useRouter } from "next/router";
import { StyledHeader } from "@/styles";
import { useEffect } from "react";

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
      <StyledHeader>WeatherPlanar</StyledHeader>
      <Component
        {...pageProps}
        data={data}
        activities={activities}
        setActivities={setActivities}
        onDeleteActivity={handleDeleteActivity}
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <Navbar pathname={pathname} />
    </>
  );
}
