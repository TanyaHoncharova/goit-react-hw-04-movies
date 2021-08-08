import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css'
import API from '../../servise/Api';


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

  useEffect(() => {
  API.getCast(movieId).then(MovieCast =>setCast(MovieCast));
    }, [movieId]);
    

  return (
      <ul className={styles.wraper}>
      {cast &&
        cast.map(actor => (
          <li key={actor.id} className={styles.actor}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
            )}
                <p>{actor.name}</p>
            <p>Character:</p>
              <p>{actor.character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
 