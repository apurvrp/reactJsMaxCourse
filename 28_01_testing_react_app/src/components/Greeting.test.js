import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    //   screen.getByText("Hello World", { exact: true });
    const helloWorldElements = screen.getByText("Hello World!");
    expect(helloWorldElements).toBeInTheDocument();
  });
});
