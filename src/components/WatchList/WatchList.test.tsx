import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import WatchList from './WatchList';

it('Watch List renders', () => {
  renderWithProviders(<WatchList />);

  waitFor(() => expect(screen.queryByTestId('watch-list')).toBeInTheDocument());
});