import About from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("About", () => {
  it("renders the About page", () => {
    render(<About personalInfo={(name, location)} />);
    expect(screen.getByText("Hello my name is . 😁")).toBeInTheDocument();
    expect(screen.getByText("Today I am in . 🚀")).toBeInTheDocument();
    expect(screen.getByText("Check out my Channels:")).toBeInTheDocument();
  });
});
