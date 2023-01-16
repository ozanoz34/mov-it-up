import '@testing-library/jest-dom';
import { waitFor, screen } from '@testing-library/react';
import { UseQueryResult } from 'react-query'
import MovieList from './MovieList';
import { MovieListModel, ErrorResponseModel } from '../../api/MovieAPI/MovieAPI.model';
import { renderWithProviders } from '../../utils/test-utils';
import movieListMock from '../../mocks/mockMovieListData.json';

const MovieDataMock = {
    page: 1,
    results: movieListMock,
    total_pages: 36683,
    total_results: 733645
};

const query : UseQueryResult<MovieListModel, ErrorResponseModel> = jest.fn().mockReturnValue({ data: MovieDataMock, isSuccess: true }) as any;

const MovieListMockProps = {
  query: query,
  header: "All Movies",
};
 

it('Movie List renders', () => {
  renderWithProviders(<MovieList {...MovieListMockProps}/>);

  waitFor(() => expect(screen.queryByTestId('movie-list-container')).toBeInTheDocument());
});