import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Games from "./Games";
import "@testing-library/jest-dom/extend-expect";
import "__mocks__/testServer";

test("Listing games", async () => {
  render(
    <Router>
      <Games />
    </Router>
  );
  await waitFor(() =>
    expect(screen.getByText("League of Legends")).toBeInTheDocument()
  );
});
