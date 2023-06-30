import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "api/TheMovieDB";
import css from "./Cast.module.css";

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      const response = await getMovieCredits(movieId);
      setCast(response);
    }

    fetchCast();
  }, [movieId]);


  return (
    <>
      {cast &&
        <ul>
          {cast.map(({ id, profile_path, name, original_name, character }) => {
            return (
              <li className={css.item} key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                />
                <p className={css.text}>{original_name}</p>
                <p className={css.text}>Character: {character}</p>
              </li>
          )})}
        </ul>
      }
    </>
  )
}

export default Cast;