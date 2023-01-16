import '@testing-library/jest-dom';

import { renderWithProviders } from '../../utils/test-utils';
import { screen } from '@testing-library/react';
import Spinner from './Spinner';

it('spinner renders', () => {
  renderWithProviders(<Spinner open={true} />);

  expect(screen.queryByTestId('spinner')).toBeInTheDocument();
});