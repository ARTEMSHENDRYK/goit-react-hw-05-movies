import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "api/TheMovieDB";
import css from "./MovieDetails.module.css";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await getMovieDetails(movieId);
      setMovieDetails(response);
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <section className={css.container}>
      <Link className={css.return} to={backLinkLocationRef.current}>Return</Link>
      {movieDetails &&
        <div className={css.movieDetails}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div className={css.movieDescr}>
            <h2 className={css.title}>{`${movieDetails.title} (${movieDetails.release_date.substring(0, 4)})`}</h2>
            <p className={css.text}>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
            <h3 className={css.overview}>Overview:</h3>
            <p className={css.text}>{movieDetails.overview}</p>
            <h4 className={css.genres}>Genres</h4>
            <p className={css.text}>
              {movieDetails.genres.map(({ id, name }) => {
                return (
                  <span className={css.genre} key={id}>{name}</span>
                )
              })}
            </p>
          </div>
        </div>}  
      <h3 className={css.title}>Additional information</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <Link className={css.link} to="cast">Cast</Link>
          </li>
          <li className={css.item}>
            <Link  className={css.link} to="reviews">Reviews</Link>
          </li>
          <Outlet />
        </ul>
    </section>
  )  
}

export default MovieDetails;