import '@testing-library/jest-dom';
import { describe, expect, it, } from "vitest";
import { render, waitFor } from '@testing-library/react';
import { StudiosWithWinners } from '.';

describe("Studios with winners", () => {

  it("should render the table with the studios winners", async () => {
    const { findByTestId } = render(<StudiosWithWinners />);

    waitFor(async () => {
      const table = await findByTestId('table-studioWithWinner');

      expect(table).toBeInTheDocument();
    })
  });

  it("should render the title 'StudiosWithWinners'", async () => {
    const { findByText } = render(<StudiosWithWinners />);

    waitFor(async () => {
      const title = await findByText('StudiosWithWinners');

      expect(title).toBeInTheDocument();
    })
  });


})