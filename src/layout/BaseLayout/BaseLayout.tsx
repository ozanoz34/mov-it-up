import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AllMovies, WatchList, FavoriteList, SideBar, MovieDetails } from '../../components'; 

const BaseLayout = () => (
  <>
    <SideBar />
    <Router>
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
    </Router>
  </>
);

export default BaseLayout;