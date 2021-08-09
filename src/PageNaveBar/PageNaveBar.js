import { NavLink } from 'react-router-dom';
import styles from './PageNaveBar.module.css';


 function PageNavBar() {
    return (
        <div className={styles.bar}>
        <nav>
        <NavLink exact to="/" className={styles.nav} activeClassName={styles.active}>
          <span>Home</span>
        </NavLink>
        <NavLink exact to="/movies" className={styles.nav} activeClassName={styles.active}>
          <span>Movies</span>
                </NavLink>
        </nav>
    </div>
    )
}

export default PageNavBar;