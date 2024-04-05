import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Cards from "./index";

// Mock cards data for testing
const mockData = {
  income: 30000, // Sample income
  empStatus: "full-time", // Sample employment status
};

describe("Cards Component", () => {
  it("renders without crashing", () => {
    render(<Cards {...mockData} />);
  });

  it("displays available credit correctly", () => {
    render(<Cards {...mockData} />);
    expect(screen.getByText("Available credit: £0")).toBeInTheDocument();
  });

  it("selects and unselects a card correctly", () => {
    render(<Cards {...mockData} />);
    const selectButtons = screen.queryAllByText(/Select card|Unselect card/);

    // Click on the first select button
    fireEvent.click(selectButtons[0]);
    expect(screen.getByText("Available credit: £300")).toBeInTheDocument(); // Assuming credit of selected card is 300

    // Click on the same select button again to unselect
    fireEvent.click(selectButtons[0]);
    expect(screen.getByText("Available credit: £0")).toBeInTheDocument();
  });
});
