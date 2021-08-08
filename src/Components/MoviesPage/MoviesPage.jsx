import { NavLink, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BtnGoBack from '../BtnCoBack/BtnGoBack'
import styles from './MoviesPage.module.css';
import qs from "query-string";
import axios from 'axios';
// import getInfo from '../../servise/Api';
const KEY = `ccfe38522ca5ce6e07118893ca908be1`;
const URL = `https://api.themoviedb.org/3`;

const MoviesPage = () => {
    const {url} = useRouteMatch();
    const { pathname, search } = useLocation();
    const location = useLocation();
    const history = useHistory();


    const [searchQuery, setSerchQuery] = useState(qs.parse(search)?.query ?? "");
    // const [searchQuery, setSerchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handelChenge = (e) => {
        setSerchQuery(e.target.value.toLowerCase());
    };
    
    async  function MovieSearch(searchQuery) {
        try {
            const response = await axios.get(`${URL}/search/movie?api_key=${KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`);
            const MoveiInfo = response.data.results;
            setMovies(MoveiInfo);
           
        } catch (error) {
    console.error(error);
  }
    };

    useEffect(() => {
        if (searchQuery === "") {
            return
        }
        if (searchQuery){
            MovieSearch(searchQuery);
            setSerchQuery('');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        MovieSearch(searchQuery);
        history.push({
      ...location,
       search: `query=${searchQuery}`,
    });
        setSerchQuery('');
    };


    return (
        <>
            <BtnGoBack />
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.formInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={searchQuery}
                    onChange={handelChenge}
                />
            <button type="submit" className={styles.formButton}>
                    <span className={styles.formButtonLabelSearc}></span>
            </button>
            </form>
            <ul className={styles.order}>
                {movies && movies.map(movie => {
                    return (<li key={movie.id}>
                        <NavLink
                            to={{
                  pathname: `${url}/${movie.id}`,
                  state: {
                      from: location,
                    //       pathname,
                    // searchQuery,
                  },
                }}>
                            {movie.title}
                        </NavLink>
                    </li>)
                })}
                </ul>
        </>    

    )
}

export default MoviesPage;
                // to={{
                //   pathname: `${pathname}/${id}`,
                //   state: {
                //     from: pathname,
                //     searchQuery,
                //   },
                // }}