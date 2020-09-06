import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Games from "./Games";
import "@testing-library/jest-dom/extend-expect";
import "../../testServer";

test("Listing games", async () => {
  render(<Games />);
  await waitFor(() =>
    expect(screen.getByText("League of Legends")).toBeInTheDocument()
  );
});

test("Resize screen", async () => {
  window.innerWidth = 500;
  render(<Games />);
  await waitFor(() => {
    expect(screen.getByTestId("artBoxUrl").src).toBe(
      "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-300x440.jpg"
    );
  });
});
