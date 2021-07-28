import React from "react";
import Extras from "./components/Extras";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Stars from "./components/Stars";
import StartCodes from "./components/StartCodes";
import Started from "./components/Started";

function App() {
  return (
    <div className=" font-sans">
      <Nav />
      <Header />
      <HeroSection />
      <Started/>
      <Favorites/>
      <Extras/>
      <Stars/>
      <StartCodes/>
      <Footer/>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </div>
  );
}

export default App;
