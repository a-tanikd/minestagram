import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Firebase from 'firebase';
import * as ROUTES from '../constants/routes';

type Props = {
  user?: Firebase.User;
  path: string;
};

const ProtectedRoute: React.FC<Props> = ({ user, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }: any) => {
      if (user) {
        return React.cloneElement(children as React.ReactElement<any, string>, {
          user,
        });
      }

      if (!user) {
        return (
          <Redirect
            to={{
              pathname: ROUTES.LOGIN,
              state: { from: location },
            }}
          />
        );
      }

      return null;
    }}
  />
);

export default ProtectedRoute;
