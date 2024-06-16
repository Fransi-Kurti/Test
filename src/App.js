import "./App.css";
import React from "react";
import Header from "./components/Header";
import GridLayout from "./components/GridLayout";
import CarouselPart from "./components/carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <GridLayout />
      </main>
      <footer>
        <CarouselPart />
      </footer>
    </div>
  );
}

export default App;
