import ActivitiesForm from ".";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("ActivitiesForm", () => {
  it("renders", () => {
    const { getByLabelText } = render(<ActivitiesForm />);
    expect(getByLabelText("Name of Activity:")).toBeInTheDocument();
  });
});

describe("ActivitiesForm", () => {
  it("renders", () => {
    const { getByLabelText } = render(<ActivitiesForm />);
    expect(getByLabelText("Date:")).toBeInTheDocument();
  });
});

describe("ActivitiesForm", () => {
  it("renders", () => {
    const { getByLabelText } = render(<ActivitiesForm />);
    expect(getByLabelText("Time:")).toBeInTheDocument();
  });
});

describe("ActivitiesForm", () => {
  it("renders", () => {
    const { getByText } = render(<ActivitiesForm />);
    expect(getByText("Submit")).toBeInTheDocument();
  });
});

describe("ActivitiesForm", () => {
  it("renders", () => {
    const { getByText } = render(<ActivitiesForm />);
    expect(getByText("Add new Activities below:")).toBeInTheDocument();
  });
});
