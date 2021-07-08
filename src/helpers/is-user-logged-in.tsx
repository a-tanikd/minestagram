import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Firebase from 'firebase';

type Props = {
  authUser?: Firebase.User;
  loggedInPath: string;
};

const IsUserLoggedIn: React.FC<Props> = ({
  authUser: user,
  loggedInPath,
  children,
  ...rest
}) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (!user) {
        return children;
      }

      if (user) {
        return (
          <Redirect
            to={{
              pathname: loggedInPath,
              state: { from: location },
            }}
          />
        );
      }

      return null;
    }}
  />
);

export default IsUserLoggedIn;
