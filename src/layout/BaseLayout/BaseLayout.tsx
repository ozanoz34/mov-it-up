import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieList from "../../components/MovieList";
import WatchList from "../../components/WatchList";
import FavoriteList from "../../components/FavoriteList";
import SideBar from '../../components/SideBar';

const BaseLayout = () => (
  <>
    <SideBar />
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
      <Routes>
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
      <Routes>
        <Route path="/favorite-list" element={<FavoriteList />} />
      </Routes>
    </Router>
  </>
);

export default BaseLayout;