
import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { LongestShortestInterval } from '.';

describe("Longest Shortest Interval", () => {

  it("should render the maximum and minumum table", async () => {
    const { findByTestId } = render(<LongestShortestInterval />);

    await waitFor(async () => {
      const minimum = await findByTestId('table-minimum')
      const maximum = await findByTestId('table-maximum')

      expect(minimum).toBeInTheDocument()
      expect(maximum).toBeInTheDocument()
    });
  });

  it("should render the title with the correct content", async () => {
    const { findByTestId } = render(<LongestShortestInterval />);

    await waitFor(async () => {
      const title = await findByTestId('title-content')

      expect(title).toHaveTextContent('Producers with longest and shortest interval between wins')
    });
  });

});

