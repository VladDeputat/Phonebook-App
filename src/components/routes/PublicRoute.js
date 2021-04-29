import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { isAuth } from '../../redux/auth/authSelectors';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthorised = useSelector(isAuth);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthorised && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
