import '@testing-library/jest-dom';

import { waitFor, screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import AllMovies from './AllMovies';

it('All Movies Page renders', () => {
  renderWithProviders(<AllMovies />);

  waitFor(() => expect(screen.queryByTestId('all-movies-page')).toBeInTheDocument());
});