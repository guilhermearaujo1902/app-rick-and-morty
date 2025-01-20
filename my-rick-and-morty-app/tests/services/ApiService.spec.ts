import axios from "axios";
import { ApiService } from "@/services";

jest.mock("axios");

describe("getCharacters", () => {
  it("should return character data when API call is successful", async () => {
    const mockResponse = {
      data: {
        results: [
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
        ],
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await ApiService.getCharacters();

    expect(result).toEqual(mockResponse.data);
  });

  it("should throw an error when API call fails", async () => {
    const errorMessage = "Error fetching characters";

    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(ApiService.getCharacters()).rejects.toThrowError(errorMessage);
  });
});
