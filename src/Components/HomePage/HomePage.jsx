import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// import PropTypes from 'prop-types';

import styles from './HomePage.module.css';

import API from '../../servise/Api';
const HomePage = () => {

    const [topMovies, setTopMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        API.getPopularMovies(setTopMovies);
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
