import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "api/TheMovieDB";

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
    <>
      <Link to={backLinkLocationRef.current}>Return</Link>
      {movieDetails &&
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div>
            <h2>{`${movieDetails.title} (${movieDetails.release_date.substring(0, 4)})`}</h2>
            <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
            <h3>Overview:</h3>
            <p>{movieDetails.overview}</p>
            <h4>Genres</h4>
            <p>
            {movieDetails.genres.map(({ id, name }) => {
              return (
                <span key={id}>{name}</span>
              )})}
            </p>
          </div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
            <Outlet />
          </ul>
        </div>  
      }
    </>
  )  
}

export default MovieDetails;
