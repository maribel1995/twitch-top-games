import React, { useState, useLayoutEffect } from "react";
import "./App.css";
import { Header } from "./components";
import { Games, Streams } from "pages";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    checkScreen();
  });

  const checkScreen = () => {
    setIsMobile(false);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    if (windowWidth < 600) {
      setIsMobile(true);
    }
  };

  return (
    <div className="container">
      <Header />
      <main>
        <Switch>
          <Route
            exact
            path="/streams/:id"
            render={() => <Streams isMobile={isMobile} />}
          />
          <Route exact path="/" render={() => <Games isMobile={isMobile} />} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
