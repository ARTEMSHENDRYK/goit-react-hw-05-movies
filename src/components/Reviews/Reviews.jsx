import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "api/TheMovieDB";
import css from "./Reviews.module.css";


const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await getMovieReviews(movieId);
      setReviews(response);
    }

    fetchReviews();
  },[movieId])


  return (
    <>
      {reviews && reviews.length > 0
        ?
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li className={css.item} key={id}>
                <p className={css.text}>AUTHOR: {author}</p>
                <p>{content}</p>
              </li>
            )})}
        </ul>
        :
        <p className={css.text}>We don't have any reviews of this movie</p>
      }
    </>
  )
}

export default Reviews;