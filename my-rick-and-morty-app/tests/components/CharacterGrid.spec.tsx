import { render, screen } from "@testing-library/react";
import CharacterGrid from "@/components/CharacterGrid";

jest.mock("@/components/CharacterCard", () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked CharacterCard</div>),
}));

describe("CharacterGrid", () => {
  test("should render the correct number of CharacterCards", () => {
    const characters = [
      { id: 1, name: "Rick Sanchez", species: "Human", image: "rick.jpg", isFavorite: false },
      { id: 2, name: "Morty Smith", species: "Human", image: "morty.jpg", isFavorite: true },
    ];

    render(<CharacterGrid characters={characters} />);

    expect(screen.getAllByText("Mocked CharacterCard")).toHaveLength(characters.length);
  });

  test("should pass correct character props to each CharacterCard", () => {
    const characters = [
      { id: 1, name: "Rick Sanchez", species: "Human", image: "rick.jpg", isFavorite: false },
      { id: 2, name: "Morty Smith", species: "Human", image: "morty.jpg", isFavorite: true },
    ];

    render(<CharacterGrid characters={characters} />);

    const characterCards = screen.getAllByText("Mocked CharacterCard");

    expect(characterCards).toHaveLength(characters.length);
  });
});
