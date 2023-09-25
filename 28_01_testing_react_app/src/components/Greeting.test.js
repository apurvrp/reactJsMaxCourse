import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("renders It's good to see you if the button was not clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const goodToSeeYouElements = screen.getByText("good to see you", {
      exact: false,
    });

    // Assert
    expect(goodToSeeYouElements).toBeInTheDocument();
  });

  test("renders Changed!", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedTextElements = screen.getByText("Changed!");
    expect(changedTextElements).toBeInTheDocument();
  });

  test('Dose not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
