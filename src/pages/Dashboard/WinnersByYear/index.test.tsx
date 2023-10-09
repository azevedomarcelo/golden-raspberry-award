import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WinnersByYear } from ".";

describe("Winners by year", () => {
  it("should render a movie by year", async () => {
    const { getByPlaceholderText, getByTestId, findByText } = render(<WinnersByYear />);

    const input = getByPlaceholderText('Search by year');
    fireEvent.change(input, { target: { value: '1980' } });

    const searchButton = getByTestId('search-by-year');
    fireEvent.click(searchButton);

    const movieTitle = await findByText("Can't Stop the Music");
    expect(movieTitle).toBeInTheDocument();
  })
})