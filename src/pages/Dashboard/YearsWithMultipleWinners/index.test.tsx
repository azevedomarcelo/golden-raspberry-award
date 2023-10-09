import '@testing-library/jest-dom';
import { describe, expect, it, } from "vitest";
import { render, waitFor } from '@testing-library/react';
import { YearsWithMultipleWinners } from '.';

describe("Years With Multiple Winners", () => {
  it("should render the table of a year with multiple winners", async () => {
    const { findByTestId } = render(<YearsWithMultipleWinners />);

    waitFor(async () => {
      const table = await findByTestId('table-YearsWithMultipleWinners');

      expect(table).toBeInTheDocument();
    });
  });

  it("should render the title \"Years With Multiple Winners\"", async () => {
    const { findByText } = render(<YearsWithMultipleWinners />);

    waitFor(async () => {
      const title = await findByText('Years With Multiple Winners');

      expect(title).toBeInTheDocument();
    });
  });

  it("should render the table columns of a year with multiple winners", async () => {
    const { findByTestId } = render(<YearsWithMultipleWinners />);

    waitFor(async () => {
      const table = await findByTestId('table-YearsWithMultipleWinners');
      const columns = table.querySelectorAll('th');

      expect(columns.length).toBeGreaterThan(0);
    });
  });
});