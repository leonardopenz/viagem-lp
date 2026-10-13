import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Itinerary from "./components/Itinerary";

function App() {
  return (
    <>
      <Hero />
      <main>
        <Itinerary />
        <Highlights />
      </main>
      <Footer />
    </>
  );
}

export default App;
