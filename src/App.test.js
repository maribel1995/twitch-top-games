import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App tests", () => {
  test("first test", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    expect(getByText(/top games/)).toBeInTheDocument();
  });
});
