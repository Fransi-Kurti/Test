import "./App.css";
import React from "react";
import Header from "./components/Header";
import GridLayout from "./components/GridLayout";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <GridLayout />
      </main>
    </div>
  );
}

export default App;
