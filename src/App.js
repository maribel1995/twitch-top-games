import React from "react";
import "./App.css";
import { Header, Games } from "./components";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Games />
      </main>
    </div>
  );
};

export default App;
