import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrending } from "api/TheMovieDB";

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
    <>
      <h1>Trending today</h1>
      {trending.map(({ id, title }) => {
        return (
          <Link key={id} to={`/movies/${id}`}>
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

export default Home;