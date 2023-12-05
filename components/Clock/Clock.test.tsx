import React from "react";
import { render, screen } from "@testing-library/react";
import Clock from "./Clock";

describe("Clock Component", () => {
  it("should render without crashing", () => {
    render(<Clock />);
  });

  it("should render clock hands", () => {
    render(<Clock />);

    const hourHand = screen.getByTestId("hour-hand");
    const minuteHand = screen.getByTestId("minute-hand");
    const secondHand = screen.getByTestId("second-hand");

    expect(hourHand).toBeInTheDocument();
    expect(minuteHand).toBeInTheDocument();
    expect(secondHand).toBeInTheDocument();
  });
});
