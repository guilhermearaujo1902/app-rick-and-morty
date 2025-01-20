
import { fetchCharacters } from "@/helpers/fetchCharacters";
import Character from "@/types/character";

describe("fetchCharacters", () => {
  it("should return a list of formatted characters", () => {
    const genericCharacterList = [
      {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        image: "rick.jpg",
        isFavorite: true,
      },
      {
        id: 2,
        name: "Morty Smith",
        species: "Human",
        image: "morty.jpg",
        isFavorite: false,
      },
    ];

    const expectedResult: Character[] = [
      {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        image: "rick.jpg",
        isFavorite: true,
      },
      {
        id: 2,
        name: "Morty Smith",
        species: "Human",
        image: "morty.jpg",
        isFavorite: false,
      },
    ];

    const result = fetchCharacters(genericCharacterList);

    expect(result).toEqual(expectedResult);
  });

  it("should return an empty array if no characters are provided", () => {
    const result = fetchCharacters([]);
    expect(result).toEqual([]);
  });
});
