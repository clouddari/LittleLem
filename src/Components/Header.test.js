import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header"; 

test("renders Header component and interacts with menu toggle", () => {
    render(<Header />);

    // Check if the company logo is displayed
    expect(screen.getByAltText("Little Lemon Logo")).toBeInTheDocument();

    // Initially, the menu should be closed
    const menuItems = screen.queryByRole('link');
    expect(menuItems).not.toBeInTheDocument();

    // Toggle the menu
    const menuToggle = screen.getByText('☰');
    fireEvent.click(menuToggle);

    // After toggling, the menu items should be visible
    const visibleMenuItems = screen.getAllByRole('link');
    expect(visibleMenuItems.length).toBe(5);  // Adjust based on the number of links
});