import React, { Suspense, lazy } from 'react';
import { useState, useEffect } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import API from '../../servise/Api';

import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast/Cast.js'  /* webpackChunkName: "Cast" */));
const Reviews = lazy(() => import('../Reviews/Reviews.js'  /* webpackChunkName: "Reviews" */));
const BtnGoBack = lazy(() => import('../BtnCoBack/BtnGoBack.js' /* webpackChunkName: "BtnCoBack" */));


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
      <Suspense fallback={<h1>Loading.....</h1>}>
      <BtnGoBack  />
      </Suspense>
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
            <Suspense fallback={<h1>Loading.....</h1>}>
              <Route path={`${path}/cast`}>
                <Cast />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews />
            </Route>
            </Suspense>
            </div>
          </>
      )}
    </>
  );

};

