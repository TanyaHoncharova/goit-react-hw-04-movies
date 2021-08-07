import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css'
// import * as APIgetInfo from '../../servise/Api';
import axios from 'axios';
const KEY = `ccfe38522ca5ce6e07118893ca908be1`;
const URL = `https://api.themoviedb.org/3`


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

//   useEffect(() => {
//     APIgetInfo.getAboutActors(movieId).then(data => setCast(data.cast));
//   }, [movieId]);
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
      async function getCast(movieId) {
        try {
            const response = await axios.get(`${URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
            const MovieCast = response.data.cast;
            setCast(MovieCast);

        } catch (error) {
            console.error(error);
        }
    };
    
        useEffect(() => {
        getCast(movieId);
    }, [movieId]);
    
    // console.log(cast);
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
 