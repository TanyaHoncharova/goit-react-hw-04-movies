import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../servise/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

 useEffect(() => {
 API.getRewies(movieId).then(MovieReviews=>setReviews(MovieReviews));
    }, [movieId]);



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