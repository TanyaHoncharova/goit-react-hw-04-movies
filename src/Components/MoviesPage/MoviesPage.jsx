import { NavLink, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BtnGoBack from '../BtnCoBack/BtnGoBack'
import styles from './MoviesPage.module.css';
import qs from "query-string";
import API from '../../servise/Api';


const MoviesPage = () => {
    const {url} = useRouteMatch();
    const { search } = useLocation();
    const location = useLocation();
    const history = useHistory();


    const [searchQuery, setSerchQuery] = useState(qs.parse(search)?.query ?? "");
    const [movies, setMovies] = useState([]);

    const handelChenge = (e) => {
        setSerchQuery(e.target.value.toLowerCase());
    };


    useEffect(() => {
        if (searchQuery === "") {
            return
        }
        if (searchQuery){
            API.MovieSearch(searchQuery).then((MoveiInfo) => setMovies(MoveiInfo));
            setSerchQuery('');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        API.MovieSearch(searchQuery).then((MoveiInfo) => setMovies(MoveiInfo));
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
