import { render, screen } from "@testing-library/react";
import CharacterContainer from "@/components/CharacterContainer";

describe("CharacterContainer", () => {
  test("should render children correctly", () => {
    render(
      <CharacterContainer>
        <div>Test Child</div>
      </CharacterContainer>
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  test("should apply correct classes", () => {
    const { container } = render(
      <CharacterContainer>
        <div>Test Child</div>
      </CharacterContainer>
    );

    expect(container.firstChild).toHaveClass("flex flex-wrap justify-center main my-12 px-6");
  });
});
