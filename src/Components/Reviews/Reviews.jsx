import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import * as APIgetInfo from '../../servise/Api';
import axios from 'axios';
const KEY = `ccfe38522ca5ce6e07118893ca908be1`;
const URL = `https://api.themoviedb.org/3`;



const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

//   useEffect(() => {
//     APIgetInfo.getReviews(movieId).then(data => setReviews(data.results));
//   }, [movieId]);
    
          async function getCast(movieId) {
        try {
            const response = await axios.get(`${URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`);
            const MovieCast = response.data.results;
            setReviews(MovieCast);

        } catch (error) {
            console.error(error);
        }
    };
    
        useEffect(() => {
        getCast(movieId);
    }, [movieId]);

    console.log(reviews);

  if (reviews && reviews.length > 0) {
    return (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }

  return <p>We don't have any reviews for this movie</p>;
};

export default Reviews;