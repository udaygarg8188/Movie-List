import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMovies } from './movieService';
import { setMovies } from './redux/actions';
import MovieList from './components/MovieList';
import FavoriteMovies from './components/FavoriteMovies';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchMovies();
        dispatch(setMovies(movies.sort((a, b) => b.rating - a.rating)));
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    getMovies();
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Movies</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
