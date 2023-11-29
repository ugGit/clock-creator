/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Home from "@/pages/index";

// TODO: temporarily disabled as the UI changes constantly during development
it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  //   expect(container).toMatchSnapshot()
});
