import React, { useState } from "react";
import { MovieCard } from "./MovieCard";

interface SearchMoviesProps {}

export const SearchMovies: React.FC<SearchMoviesProps> = ({}) => {
  const [textSearch, setTextSearch] = useState("");
  const [movies, setMovies] = useState<Array<any>>([{}]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=5f8d663c01a14ea5aaeadf55b334948e&query=${textSearch}&page=1&adult_content=false`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log("data:", data.results);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          className="input"
          id="query"
          placeholder="i.e. Inception"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="movie-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard
              title={movie.title}
              path={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              summary={movie.overview}
              rating={movie.vote_average}
              releaseDate={movie.release_date}
            />
          ))}
      </div>
    </div>
  );
};
