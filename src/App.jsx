import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  return (
    <main>
      <Header />
      <Section id="hero">
        <h1 id="title">Kalanjali</h1>
      </Section>
      <Section id="schedule">
        <h2>Schedule</h2>
      </Section>
      <Footer />
    </main>
  );
}

export default App;
