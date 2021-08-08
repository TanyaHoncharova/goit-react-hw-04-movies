import { useState, useEffect } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { useHistory } from "react-router-dom";

import BtnGoBack from '../BtnCoBack/BtnGoBack';

import API from '../../servise/Api';
import Cast from '../Cast';
import Reviews from '../Reviews';

import styles from './MovieDetailsPage.module.css'



export default function MovieDetalsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
  const { url, path } = useRouteMatch();
  
  const history = useHistory();



    useEffect(() => {
        API.getMovieInfo(movieId).then(movieInfo => setMovie(movieInfo));
    }, [movieId]);
    


  return (
      <>
      <BtnGoBack  />
      {movie && (
        <>
        <div className={styles.wraper}>
          <img className={styles.pic}
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className={styles.textDetals}>
            <h1>{movie.title}</h1>
            <p>User Score: {movie.vote_average * 10}%</p>

            <h2>Overview</h2>
            <p>{movie.overview}</p>

            <h2>Genres</h2>
            <p>{movie.genres && movie.genres.map(genre => `${genre.name} `)}</p>
          </div>
        </div>
            <div className={styles.cast}>
              <h3>Additional information</h3>
              <ul>
                <li>
                <NavLink to={{
                    pathname:`${url}/cast`,
                    state:{ from: history.location.state.from}}}>Cast</NavLink>
                </li>
                <li>
                  <NavLink to={{
                    pathname:`${url}/reviews`,
                    state:{ from: history.location.state.from}}}>Reviews</NavLink>
                </li>
              </ul>
              <Route path={`${path}/cast`}>
                <Cast />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews />
              </Route>
            </div>
          </>
      )}
    </>
  );

};

