import styled from "styled-components";
import { useEffect, useState } from "react";
import useSWR from "swr";

const URL = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=Leipzig&days=3`;

export default function Home() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d38672a904msh78a82c0fa65980fp169e25jsn3794bb9a59e1",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const { data, error, isLoading } = useSWR(URL, fetcher, options);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  /* 
  useEffect(() => {
    async function getWeather() {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d38672a904msh78a82c0fa65980fp169e25jsn3794bb9a59e1",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };
      const response = await fetch(
        "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Leipzig&days=3",
        options
      );
      const data = await response.json();
      setData(data);
    }
    getWeather();
  }, []);

  console.log(data); */

  return (
    <main>
      <Heading>🐋Capstone Whales Template🐋</Heading>
    </main>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
