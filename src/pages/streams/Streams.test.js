import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Streams from "./Streams";
import "@testing-library/jest-dom/extend-expect";
import "__mocks__/testServer";

test("Show stream title named 👽 EVENTO GTA V ROLEPLAY, LA PUUUURGA 👽", async () => {
  render(
    <Router>
      <Streams />
    </Router>
  );
  await waitFor(() =>
    expect(
      screen.getByText("👽 EVENTO GTA V ROLEPLAY, LA PUUUURGA 👽")
    ).toBeInTheDocument()
  );
});
