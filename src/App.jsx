import Booking from "./components/booking/Booking";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Rating from "./components/rating/Rating";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Booking />
        <Rating />
      </main>
    </>
  );
}

export default App;
