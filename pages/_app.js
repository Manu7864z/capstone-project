import GlobalStyle from "@/styles";
import Head from "next/head";
/* import useSWR from "swr"; */

/* const URL = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=Leipzig&days=3`; */

export default function App({ Component, pageProps }) {
  /*   const fetcher = (url) => fetch(url).then((res) => res.json());

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY ,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const { data, error, isLoading } = useSWR(URL, fetcher, options);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);
   */
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>WeatherPlanar</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
