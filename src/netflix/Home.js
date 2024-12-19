import axios from 'axios';
import './home.css';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=2481c343e78db17b69c36f1c5b85f625'
      )
      .then((res) => {
        setData(res.data.results);
        setSearchResults(res.data.results);
      });
  }, []);

  const handleSearch = (event) => {
    setQuery(event.target.value);
    if (event.target.value === '') {
      setSearchResults(data);
    } else {
      const filtered = data.filter((film) =>
        film.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };

  const detai = (index) => {
    setSelectedFilm(searchResults[index]);
  };

  return (
    <div className="home">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleSearch}
        />
      </div>
      {selectedFilm ? (
        <div className="details">
          <button className="back-button" onClick={() => setSelectedFilm(null)}>
            Go Back
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedFilm.poster_path}`}
            alt={selectedFilm.title}
          />
          <h2>{selectedFilm.title}</h2>
          <p>{selectedFilm.overview}</p>
        </div>
      ) : (
        <div className="movies">
          {searchResults.map((film, index) => (
            <div className="card" key={index} onClick={() => detai(index)}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt={film.title}
              />
              <h1>{film.title}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
