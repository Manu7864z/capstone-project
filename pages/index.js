import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Heading>WeatherPlanar</Heading>
      <button type="button" onClick={() => router.push("/activitiesForm")}>
        Neue Aktivitäten erstellen
      </button>
    </main>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
