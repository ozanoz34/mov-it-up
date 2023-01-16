import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import PageNotFound from './PageNotFound';

it('Page Not Found renders', () => {
  renderWithProviders(<PageNotFound />);

  expect(screen.getByTestId('page-not-found')).toBeInTheDocument();
});