import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import CharacterNotFound from "@/components/CharacterNotFound";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("CharacterNotFound", () => {
  test("should render 'Nada foi encontrado' when on home page", () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
    });

    render(<CharacterNotFound />);

    expect(screen.getByText("Nada foi encontrado")).toBeInTheDocument();
    expect(screen.getByText("Tente realizar uma nova busca.")).toBeInTheDocument();
  });

  test("should render 'Parece que você ainda não tem favoritos' when not on home page", () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/favorites",
    });

    render(<CharacterNotFound />);

    expect(screen.getByText("Parece que você ainda não tem favoritos")).toBeInTheDocument();
    expect(screen.getByText("Volte à página inicial e escolha os melhores para você.")).toBeInTheDocument();
  });

  test("should call push when 'Voltar ao início' button is clicked", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/favorites",
      push,
    });

    render(<CharacterNotFound />);

    const button = screen.getByText("Voltar ao início");
    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith("/");
  });
});
