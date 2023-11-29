import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "./navigation";

describe("Navigation Component", () => {
  it("should render navigation items", () => {
    render(<Navigation />);

    // Check if each navigation item is present
    const navigationItems = ["Home", "Designer", "Projects", "About Us"];
    navigationItems.forEach((item) => {
      const navigationItem = screen.getByText(item);
      expect(navigationItem).toBeInTheDocument();
    });
  });
});
