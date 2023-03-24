import About from "@/components/About";

export default function AboutPage({ personalInfo, setPersonalInfo }) {
  return (
    <>
      <About personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
    </>
  );
}
