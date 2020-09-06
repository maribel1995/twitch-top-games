import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App tests", () => {
  test("first test", () => {
    const { getByText } = render(<App />);
    expect(getByText(/top games/)).toBeInTheDocument();
  });
});
