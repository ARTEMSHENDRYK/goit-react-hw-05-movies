import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getSearchMovies } from "api/TheMovieDB";
import css from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") ?? "";
  const location = useLocation();
  const [flag, setFlag] = useState(true);

  const handleInputChange = (evt) => {
    setFlag(false);
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
    
    setFlag(true);
  }

  useEffect(() => {
    if (!flag) return;
    
    const fetchSearchMovies = async () => {
      const response = await getSearchMovies(searchQuery);
      setMovies(response);
    }  

    fetchSearchMovies();
  }, [flag, searchQuery]);


  return (
    <section className={css.container}>
      <form onSubmit={handleSubmit}>
        <input className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className={css.submit} type="submit">
          <p className={css.text}>Search</p>
        </button>
      </form>
      <ul className={css.list}>
      {movies.map(({ id, title }) => {
        return (
          <Link className={css.link}
            key={id}
            to={`/movies/${id}`}
            state={{ from: location }}>
              <li className={css.item}>
                {title}
              </li>
          </Link>
        )})}
      </ul>  
    </section>
  )  
}

export default Movies;