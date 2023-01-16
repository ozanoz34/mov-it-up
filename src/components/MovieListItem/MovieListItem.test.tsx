import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import MovieListItem from './MovieListItem';
import movieMock from '../../mocks/mockMovieData.json';
import { calculateKey } from './MovieListItem.helpers';

const addToFavorites = jest.fn();
const addToWatchList = jest.fn();

const MovieListItemMockProps = {
  movieItem: movieMock,
  addToFavorites,
  addToWatchList,
};

it('Movie List Item renders', () => {
  renderWithProviders(<MovieListItem {...MovieListItemMockProps} />);

  expect(screen.queryByTestId('movie-card-item')).toBeInTheDocument();
  expect(screen.getByTestId('movie-card-title')).toHaveTextContent(MovieListItemMockProps.movieItem.title);
});

it('Test helper function for key', () => {
  const result = calculateKey([1,2], 3);
  const result2 = calculateKey([1,2], 2);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});