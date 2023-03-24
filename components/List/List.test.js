import List from "./List";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("List", () => {
  it("renders", () => {
    const { getByText } = render(<List />);
    expect(getByText("Your planned Activities:")).toBeInTheDocument();
  });
});

describe("List", () => {
  it("renders", () => {
    const { getByLabelText } = render(<List />);
    expect(getByLabelText("List of planned Activities")).toBeInTheDocument();
  });
});
