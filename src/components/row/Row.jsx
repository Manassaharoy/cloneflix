import React, { useState, useEffect } from "react";
import axios from "../../axios"
import "./row.css";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = async (movie, isLargeRow) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else if (!isLargeRow) {
      let trailerurl = await axios.get(
        `/movie/550?api_key=b781d9c0790b7d509410a9efe6a13d6d`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path !== null && (
              <img
                onClick={() => handleClick(movie, isLargeRow)}
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
