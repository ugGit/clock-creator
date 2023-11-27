/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages/index";

import { createMemoryHistory } from "history";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it("renders the navigation", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: /this page/i });
    expect(link).toBeInTheDocument();
  });
});
