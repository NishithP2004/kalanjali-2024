import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Schedule from "./components/Schedule";
import Highlights from "./components/Highlights";
import GratitudeCorner from "./components/GratitudeCorner";
import Posters from "./components/Posters";
import LoadingPage from "./components/LoadingPage";
import { useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    setTimeout(() => {
      const loader = document.getElementById("loading-screen");
      loader.style.display = "none";
    }, 3 * 1000);
  });

  const highlightsRef = useRef(),
    scheduleRef = useRef(),
    postersRef = useRef();

  return (
    <main>
      <LoadingPage />
      <Header
        scheduleRef={scheduleRef}
        highlightsRef={highlightsRef}
        postersRef={postersRef}
      />
      <Section id="hero">
        <h1 id="title">Kalanjali'24</h1>
        {/* <img
          src="Amma.png"
          className="logo amma-logo"
          alt="Mata Amritanandamayi"
          onClick={() => {
            window.open("https://amrita.edu", "_blank");
          }}
        /> */}
      </Section>
      <Section id="highlights">
        <h2 ref={highlightsRef}>Highlights</h2>
        <br />
        <Highlights />
      </Section>
      <Section id="schedule">
        <h2 ref={scheduleRef}>Schedule</h2>
        <Schedule />
      </Section>
      <Section id="posters" ref={postersRef}>
        <h2 ref={postersRef}>Posters</h2>
        <Posters />
      </Section>
      <GratitudeCorner />
      <Footer />
    </main>
  );
}

export default App;
