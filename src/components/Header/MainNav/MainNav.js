import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isAuth } from '../../../redux/auth/authSelectors';
import styles from './MainNav.module.scss';

const MainNav = () => {
  const isAuthorised = useSelector(isAuth);
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink exact to="/" activeClassName={styles.activeLink}>
            Home
          </NavLink>
        </li>
        {isAuthorised && (
          <li className={styles.navItem}>
            <NavLink to="/contacts" activeClassName={styles.activeLink}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainNav;
