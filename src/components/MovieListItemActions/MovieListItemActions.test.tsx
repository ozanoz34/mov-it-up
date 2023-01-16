import '@testing-library/jest-dom';
import { screen, waitFor, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import MovieListItemActions from './MovieListItemActions';

const addToFavorites = jest.fn();
const addToWatchList = jest.fn();

const MovieListItemActionProps = {
  id: 5,
  favorites: [5,6],
  watchList: [1,3],
  addToFavorites,
  addToWatchList,
};

it('Movie Card Actions render', () => {
  renderWithProviders(<MovieListItemActions {...MovieListItemActionProps}/>);

  expect(screen.queryByTestId('movie-card-actions')).toBeInTheDocument();
});

it('Action functions are called', () => {
  renderWithProviders(<MovieListItemActions {...MovieListItemActionProps} />);
  const favButton = screen.queryByTestId('movie-card-add-fav') as HTMLElement;
  fireEvent.click(favButton);
  const watchListButton = screen.queryByTestId('movie-card-add-watch') as HTMLElement;
  fireEvent.click(watchListButton);
  
  waitFor(() => {
    expect(MovieListItemActionProps.addToWatchList).toHaveBeenCalled();
    expect(MovieListItemActionProps.addToFavorites).toHaveBeenCalled();
  })
});