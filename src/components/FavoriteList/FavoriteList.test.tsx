import '@testing-library/jest-dom';

import { renderWithProviders } from '../../utils/test-utils';
import { waitFor, screen } from '@testing-library/react';
import FavoriteList from '.';

it("Favorite List renders", () => {
  renderWithProviders(<FavoriteList />);

  waitFor(() => expect(screen.queryByTestId('favorite-list')).toBeInTheDocument());
});