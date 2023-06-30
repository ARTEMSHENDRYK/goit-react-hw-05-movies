import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrending } from "api/TheMovieDB";
import css from "./Home.module.css";

const Home = () => {
  const [trending, setTranding] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const response = await getTrending();
      setTranding(response);
    }

    fetchTrending();
  }, []);
  
  return (
    <section className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      <ul  className={css.list}>
      {trending.map(({ id, title }) => {
        return (
            <Link className={css.link} key={id} to={`/movies/${id}`}>
              <li className={css.item}>
                {title}
              </li>
            </Link>
        )})}
      </ul>  
    </section>
  )
}

export default Home;