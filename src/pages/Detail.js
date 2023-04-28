import React, { useEffect, useRef, useState } from "react";

// Components
import Loading from "../components/Loading";
import Error from "../components/Error";
import SidebarLayout from "../components/SidebarLayout";

// Utils
import { api } from "../config/utils";

export default function Detail({ match }) {
  const movieRef = useRef();
  const { movieId } = match.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    movieRef.current = movieId;
  });

  const getMovie = (id) => {
    setLoading(true);
    fetch(api.detail(id))
      .then((res) => res.json())
      .then((movie) => {
        setMovie(movie);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setErr(true);
      });
  };

  useEffect(() => {
    getMovie(movieRef.current);
  }, []);

  return !loading ? (
    <SidebarLayout>
      {!err && (movie !== null) ? (
        <div className="movie-info-container">
          <div className="movie-banner-cover">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
              alt="movie cover"
            />
          </div>
          <div className="movie-detail-container">
            <div className="movie-cover">
              <img
                src={
                  movie.poster_path
                    ? "https://image.tmdb.org/t/p/w200" + movie.poster_path
                    : "/noimage.png"
                }
                alt="movie poster"
              />
            </div>
            <div className="movie-detail">
              <h2>{movie.title}</h2>
              <div className="short-info">
                <div className="rate">
                  <span>
                    Rate:
                    <strong> {movie.vote_average}</strong>
                  </span>
                </div>
                <div className="duration">
                  <span>
                    length: <strong>{movie.runtime} min</strong>
                  </span>
                </div>
                <div className="genres">
                  <span>genres:</span>
                  {movie?.genres?.map((genre) => (
                    <a href="http://brayancoy.dev" key={genre.id}>
                      {genre.name}
                    </a>
                  ))}
                </div>
              </div>
              <p className="desc">{movie.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </SidebarLayout>
  ) : (
    <Loading />
  );
}
