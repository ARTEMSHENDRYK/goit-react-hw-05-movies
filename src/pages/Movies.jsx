import { getSearchMovies } from "api/TheMovieDB";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") ?? "";
  const location = useLocation();

  const handleInputChange = (evt) => {
    evt.target.value.toLowerCase()
      ? setSearchParams({ query: evt.target.value.toLowerCase() })
      : setSearchParams({});
  } 
  
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!searchQuery.trim()) {
      alert("Some search query needed.");
      return;
    }
    
    const fetchSearchMovies = async () => {
      const response = await getSearchMovies(searchQuery);
      setMovies(response);
    }

    fetchSearchMovies();
  }

  useEffect(() => {
    const fetchSearchMovies = async () => {
      const response = await getSearchMovies(searchQuery);
      setMovies(response);
    }

    if (searchQuery) {
      fetchSearchMovies();
    }

  }, [searchQuery]);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">
          <span >Search</span>
        </button>
      </form>
      {movies.map(({ id, title }) => {
        return (
          <Link
            key={id}
            to={`/movies/${id}`}
            state={{ from: location }}>
            <ul>
              <li>
                {title}
              </li>
            </ul>
          </Link>
        )
      })}
    </>
  )  
}

export default Movies;