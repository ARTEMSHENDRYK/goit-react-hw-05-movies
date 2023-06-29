import { getMovieCredits } from "api/TheMovieDB";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
          )})}
        </ul>
      }
    </>
  )
}

export default Cast;