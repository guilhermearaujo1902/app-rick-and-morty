import { Provider, useDispatch } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { CharacterCard } from "@/components";
import { toggleFavorite } from "@/features";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("CharacterCard", () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);

    const store = configureStore({
      reducer: {
        charactersData: (state = { favoriteCount: 5 }) => state,
      },
    });

    const character = {
      id: 1,
      name: "Rick Sanchez",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      isFavorite: false,
    };

    render(
      <Provider store={store}>
        <CharacterCard character={character} />
      </Provider>
    );
  });

  test("should render the character name and species", () => {
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
  });

  test("should render a non-favorite icon if character is not favorite", () => {
    const nonFavoriteIcon = screen.getByTestId("non-favorite-icon");

    expect(nonFavoriteIcon).toBeInTheDocument();
  });

  test("should call 'setFavorite' when non-favorite icon is clicked", () => {
    const nonFavoriteIconDiv = screen.getByTestId("favorite-icon-div");

    fireEvent.click(nonFavoriteIconDiv);
    expect(dispatchMock).toHaveBeenCalledWith(toggleFavorite(1));
  });

});
