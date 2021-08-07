import { useState, useEffect } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import BtnGoBack from '../BtnCoBack/BtnGoBack';
import axios from 'axios';
// import * as APIgetInfo from '../../servise/Api';
import Cast from '../Cast';
import Reviews from '../Reviews';

import styles from './MovieDetailsPage.module.css'
const KEY = `ccfe38522ca5ce6e07118893ca908be1`;
const URL = `https://api.themoviedb.org/3`;


export default function MovieDetalsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const { url, path } = useRouteMatch();

    
    async function getMovieInfo(movieId) {
        try {
            const response = await axios.get(`${URL}/movie/${movieId}?api_key=${KEY}`);
            const movieInfo = response.data;
            setMovie(movieInfo);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMovieInfo(movieId);
    }, [movieId]);
    


  return (
      <>
      <BtnGoBack/>
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
                  <NavLink to={`${url}/cast`}>Cast</NavLink>
                </li>
                <li>
                  <NavLink to={`${url}/reviews`}>Reviews</NavLink>
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



// много деталей о фильме 
        //     <ul>

        //         <li key="title"> title :<span> {movie.title}</span></li>
        //         <li key="date"> release_date :<span> {movie.release_date}</span></li>
        //         <li key="homepage"> homepage :<span> {movie.homepage}</span></li>
        //         <li key="language"> original_language :<span> {movie.original_language}</span></li>
        //         <li key="popularity"> popularity :<span> {movie.popularity}</span></li>
        //         <li key="companies"> production_companies :<span>
        //            <ul>
        //             {movie.production_companies && movie.production_companies.map(({ name, origin_country, id }) => {
        //                 return (
        //                     <li key={id} >name:{name},  origin country:{origin_country}</li>
        //                 )
        //             })}
        //         </ul>
        //         </span></li>
        //         <li key="runtime"> runtime :<span> {movie.runtime}</span></li>
        //     <li key="overview"> overview :<span> {movie.overview}</span></li>
        // </ul>

        // для актеров и отзывов
            // <ul>
            // { casts && casts.map(({id,name, }) => {
            //    return <li key={id}>{name}</li>
            //     })}
            // </ul>
            // <ul>
            //     { crew && crew.map(({id, job,name}) => {
            //       return  <li key={id}>{name}, { job}</li>
            //     })}
            // </ul>