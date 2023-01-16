import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import SearchBar from '.';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

it('Search Bar renders', () => {
  renderWithProviders(<SearchBar />);

  expect(screen.queryByTestId('search-bar-input')).toBeInTheDocument();
  expect(screen.queryByTestId('search-bar-button')).toBeInTheDocument();
});

it('Search Button is valid', () => {
  renderWithProviders(<SearchBar />);
  const button = screen.queryByTestId('search-bar-button') as HTMLElement;

  expect(button).toBeValid();
});