import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import PageHeader from './PageHeader';

it('Page Header renders and has the correct value', () => {
  renderWithProviders(<PageHeader title="Mov it up!" />);

  waitFor(() => {
    expect(screen.queryByTestId('page-header')).toBeInTheDocument();
    expect(screen.queryByTestId('page-header')).toHaveTextContent('Mov it up!');
  });
});