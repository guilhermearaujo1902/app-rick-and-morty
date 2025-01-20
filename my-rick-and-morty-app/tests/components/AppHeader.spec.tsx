import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { configureStore } from "@reduxjs/toolkit";
import { AppHeader } from "@/components";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("AppHeader", () => {
  const mockPush = jest.fn();
  
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
      push: mockPush,
    });

    const store = configureStore({
      reducer: {
        charactersData: (state = { favoriteCount: 5 }) => state,
      },
    });

    render(
      <Provider store={store}>
        <AppHeader />
      </Provider>
    );
  });

  test("should render correctly the component", () => {
    expect(
      screen.getByAltText("Descrição Rick and Morty com a cor da letra em verde e o contorno em amarelo")
    ).toBeInTheDocument();

    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Favoritos")).toBeInTheDocument();
  });

  test("should call function 'push' on click button 'Favoritos'", () => {
    const favoritosButton = screen.getByText("Favoritos");
    fireEvent.click(favoritosButton);

    expect(mockPush).toHaveBeenCalledWith("/favorites");
  });

  test("should call function 'push' on click button 'Início'", () => {
    const inicioButton = screen.getByText("Início");
    fireEvent.click(inicioButton);

    expect(mockPush).toHaveBeenCalledWith("/");
  });

  test("should render correclty number of favorites", () => {
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
