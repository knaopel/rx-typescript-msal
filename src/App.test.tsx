import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Microsoft Authentication Library/);
  expect(headerElement).toBeInTheDocument();
});
