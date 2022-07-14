import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Gabriel")).toBeInTheDocument();
    expect(getByText("Herik")).toBeInTheDocument();
    expect(getByText("Everson")).toBeInTheDocument();
    expect(getByText("Ricardo")).toBeInTheDocument();
  });

  it("should able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<App />);

    const inputElement = getByPlaceholderText("Digite para inserir na lista");
    const addButton = getByText("Adicionar");

    fireEvent.change(inputElement, { target: { value: "Novo" } });

    fireEvent.click(addButton);

    expect(await findByText("Novo")).toBeInTheDocument();
  });
});
