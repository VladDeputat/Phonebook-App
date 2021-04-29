import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { isAuth } from '../../redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthorised = useSelector(isAuth);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthorised ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
