import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const PageNaveBar = lazy(() => import('./PageNaveBar/PageNaveBar.js' /* webpackChunkName: "PageNaveBar" */ ));
const HomePage = lazy(() => import('./Components/HomePage/HomePage.js' /* webpackChunkName: "HomePage" */));
const MoviesPage = lazy(() => import('./Components/MoviesPage/MoviesPage.js' /* webpackChunkName: "MoviesPage" */));
const MovieDetalsPage = lazy(() => import('./Components/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "MovieDetalsPage" */));

export default function  App () {
  return (
    <>
    <Suspense fallback={<h1>Loading.....</h1>}>
      <PageNaveBar/>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route> 
        <Route path="/movies" exact>
            <MoviesPage />
        </Route> 
        <Route path="/movies/:movieId">
        <MovieDetalsPage/>
        </Route>
      </Switch>
    </Suspense>
    
    
   </>
  );
}


