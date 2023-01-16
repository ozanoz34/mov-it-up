import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import SearchResults from '.';

it('Search Results Page renders', () => {
  renderWithProviders(<SearchResults />);

  waitFor(() => expect(screen.queryByTestId('search-results-page')).toBeInTheDocument());
});