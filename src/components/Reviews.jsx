const { getMovieReviews } = require("api/TheMovieDB");
const { useState, useEffect } = require("react");
const { useParams } = require("react-router-dom");

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
              <li key={id}>
                <p>AUTHOR: {author}</p>
                <p>{content}</p>
              </li>
            )})}
        </ul>
        :
        <p>We don't have any reviews of this movie</p>
      }
    </>
  )
}

export default Reviews;