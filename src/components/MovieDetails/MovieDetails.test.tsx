import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import MovieDetails from './MovieDetails';

const MovieDetailsMockProps = {
  title: 'Avatar',
  overview: 'James Camerons popular movie',
  homepage: 'https://www.google.com/',
  videoUrl: 'https://www.youtube.com/watch?v=zpSueMIfc2k',
  release_date: '12/12/2009',
}

it('Movie Details Page renders', () => {
  renderWithProviders(<MovieDetails {...MovieDetailsMockProps}/>);

  expect(screen.queryByTestId('movie-page-title')).toBeInTheDocument();
  expect(screen.queryByTestId('movie-page-title')).toHaveTextContent('Avatar');
});