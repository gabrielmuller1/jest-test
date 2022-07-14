import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import List from "./List";

describe("List Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<List initialItems={["Gabriel", "Herik", "Everson", "Ricardo"]} />);

    expect(getByText("Gabriel")).toBeInTheDocument();
    expect(getByText("Herik")).toBeInTheDocument();
    expect(getByText("Everson")).toBeInTheDocument();
    expect(getByText("Ricardo")).toBeInTheDocument();
  });

  it("should able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<List initialItems={[]} />);

    const inputElement = getByPlaceholderText("Digite para inserir na lista");
    const addButton = getByText("Adicionar");

    fireEvent.change(inputElement, { target: { value: "Novo" } });

    fireEvent.click(addButton);

    await waitFor(async () => {
      expect(await findByText("Novo")).toBeInTheDocument();
    });
  });

  it("should able to add remove item to the list", async () => {
    const { getByText, getAllByText } = render(<List initialItems={['Gabriel']} />);

    const removeButtons = getAllByText("Remover");

    fireEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return getByText("Gabriel");
    });
  });
});
