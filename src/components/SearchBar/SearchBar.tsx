import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';

import { Alert } from '../';
import MovieAPI from '../../api/MovieAPI/MovieAPI';
import { QUERY, MovieListModel, ErrorResponseModel } from '../../api/MovieAPI/MovieAPI.model';
import { setSearchResults } from '../../redux/Movies.redux';

import * as Styled from './SearchBar.styles';

type Props = {
  className?: string;
};

const SearchBar = ({ className }: Props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [isSearchedAllowed, setIsSearchAllowed] = useState(false);
  const navigate = useNavigate();
  const {data, refetch, isError, error} = useQuery<MovieListModel, ErrorResponseModel>(
    [QUERY.SEARCHED_MOVIES, query], () => MovieAPI.getSearchedMovie(query),
    { 
      enabled: isSearchedAllowed,
      onSuccess: () => {
        if(data) {
          dispatch(setSearchResults(data?.results));
          navigate('/search-results');
        }
      } 
    }
  );

  const onKeyPressed = (e:any) => {
    if(e.keyCode === 13) {
      handleSearch();
    }
  }

  const handleSearch = () => {
    if(query) {
      setIsSearchAllowed(true);
      refetch();
    }
  };

  return(
    <>
      {isError && <Alert severity="error">{error?.response.status}: {error?.response.data.status_message}</Alert>}
      <div>
        <Styled.SearchInput
          name="search-query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your movie name"
          onKeyDown={(e) => onKeyPressed(e)}
          data-testid="search-bar-input"
        />
        <Styled.SearchButton onClick={handleSearch} className={className} data-testid="search-bar-button">
          Search
        </Styled.SearchButton>
      </div>
    </>
  );

};

export default SearchBar;