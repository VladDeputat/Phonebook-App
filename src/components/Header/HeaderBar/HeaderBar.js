import styles from './HeaderBar.module.scss';
import AuthMenu from '../AuthMenu/AuthMenu';
import MainNav from '../MainNav/MainNav';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { isAuth } from '../../../redux/auth/authSelectors';

const HeaderBar = () => {
  const isAuthorised = useSelector(isAuth);
  return (
    <header className={styles.header}>
      <MainNav />
      {isAuthorised ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};

export default HeaderBar;
