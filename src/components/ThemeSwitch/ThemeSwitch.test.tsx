import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import ThemeSwitch from './ThemeSwitch';

it('Theme Switch renders', () => {
  renderWithProviders(<ThemeSwitch />);

  expect(screen.queryByTestId('theme-switch')).toBeInTheDocument();
});