import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App tests", () => {
  test("renders learn react link", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent("Top Games");
  });
});
