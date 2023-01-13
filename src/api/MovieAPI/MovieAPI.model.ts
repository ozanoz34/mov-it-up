type ErrorModel = {
  status: string;
  data: {
    status_message: string;
  }
};

type ErrorResponseModel = {
  response: ErrorModel;
}

type MovieListItemModel = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

type MovieListModel = {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieListItemModel[];
};

enum QUERY {
  POPULAR_MOVIES = 'popularMovies',
}

export type { MovieListItemModel, MovieListModel, ErrorResponseModel };
export { QUERY };