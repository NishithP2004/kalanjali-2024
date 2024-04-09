import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Schedule from "./components/Schedule";
import Highlights from "./components/Highlights";
import GratitudeCorner from "./components/GratitudeCorner";
import Posters from "./components/Posters";

function App() {
  return (
    <main>
      <Header />
      <Section id="hero">
        <h1 id="title">Kalanjali 24</h1>
      </Section>
      <Section id="highlights">
        <h2>Highlights</h2>
        <br />
        <Highlights />
      </Section>
      <Section id="schedule">
        <h2>Schedule</h2>
        <Schedule />
      </Section>
      <Section id="posters">
        <h2>Posters</h2>
        <Posters />
      </Section>
      <GratitudeCorner />
      <Footer />
    </main>
  );
}

export default App;
