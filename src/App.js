import { Route, Switch, NavLink } from 'react-router-dom';
import PageNaveBar from './PageNaveBar';
import MoviesPage from './Components/MoviesPage';
import HomePage from './Components/HomePage/HomePage';
import MovieDetalsPage from './Components/MovieDetailsPage';
import './App.css';

export default function  App () {


  return (
    <>
      <PageNaveBar/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetalsPage} />
        
      </Switch>
    
    
   </>
  );
}


