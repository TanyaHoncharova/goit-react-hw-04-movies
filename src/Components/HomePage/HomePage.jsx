import React, { useState, useEffect } from 'react';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './HomePage.module.css';

const HomePage = () => {
    const {url} = useRouteMatch();
    const [topMovies, setTopMofies] = useState([]);
    const location = useLocation();
    
    const KEY = `ccfe38522ca5ce6e07118893ca908be1`;
    const URL=`https://api.themoviedb.org/3`
    
    async  function MovieSearch() {
        try {
            const response = await axios.get(`${URL}/trending/movie/week?api_key=${KEY}`);
            // console.dir(response);
            const topMovies = response.data.results;
            setTopMofies(topMovies);
            
        } catch (error) {
            console.error(error);
        }
    };
        
    useEffect(() => {
         MovieSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    return (
        <>
            <h1 className={styles.sectionName}>Trending today</h1>
        <ul >
            {topMovies.map(e => {
                return (<li className={styles.order} key={e.id}>
                    <NavLink to={{
                        pathname: `/movies/${e.id}}`,
                        state: { from: location },
                    }}
                        className={styles.link}>{e.title}</NavLink>
                </li>)
            })
            }
            </ul>
        </>    
    )
};

export default HomePage;
