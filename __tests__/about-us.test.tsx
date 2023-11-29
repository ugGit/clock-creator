/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import AboutUs from "@/pages/about-us";

describe("AboutUs", () => {
  it("renders a heading", () => {
    render(<AboutUs />);

    const heading = screen.getByText(/about us sample header/i);

    expect(heading).toBeInTheDocument();
  });
});
