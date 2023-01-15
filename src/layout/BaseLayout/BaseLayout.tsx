import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  AllMovies,
  WatchList,
  FavoriteList,
  SideBar,
  MovieDetails,
  SearchBar,
  SearchResults,
  ThemeSwitch,
} from '../../components';
import { getIsDark } from "../../redux/Movies.redux";
import popcornDark from '../../assets/popcorndark.jpeg';
import popcornLight from '../../assets/poprornLight.jpeg';

import * as Styled from './BaseLayout.styles';

const BaseLayout = () => {
  const isDark = useSelector(getIsDark);
  const backgroundImage = isDark ? popcornDark : popcornLight;

  return (
    <Styled.LayoutWrapper $url={backgroundImage}>
      <SideBar />
      <ThemeSwitch />
      <SearchBar />
      <>
        <Routes>
          <Route path="/" element={<AllMovies />} />
        </Routes>
        <Routes>
          <Route path="/watch-list" element={<WatchList />} />
        </Routes>
        <Routes>
          <Route path="/favorite-list" element={<FavoriteList />} />
        </Routes>
        <Routes>
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Routes>
        <Routes>
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </>
    </Styled.LayoutWrapper>
  );
}

export default BaseLayout;