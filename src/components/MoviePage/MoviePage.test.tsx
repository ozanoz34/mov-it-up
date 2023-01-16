import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import MoviePage from './MoviePage';

it('Movie Details Page renders', () => {
  renderWithProviders(<MoviePage />);

  waitFor(() => expect(screen.queryByTestId('movie-page')).toBeInTheDocument());
});