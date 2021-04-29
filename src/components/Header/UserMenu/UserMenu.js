import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../../redux/auth/authSelectors';
import defAvatar from '../../../img/noPhoto.png';
import {
  userMenuBox,
  userAvatar,
  welcomeText,
  logOutBtn,
} from './UserMenu.module.scss';
import { logOut } from '../../../redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logOut());
  };
  const name = useSelector(getUserName);
  const avatar = defAvatar;
  return (
    <div className={userMenuBox}>
      <img src={avatar} alt="avatar" className={userAvatar} />
      <p className={welcomeText}>Welcome, {name}</p>
      <button className={logOutBtn} type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
