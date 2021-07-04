// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

type Props = {
    user?: any;
    children: any;
};

export default function ProtectedRoute({ user, children, ...rest }: Props) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Route
      {...rest}
      render={({
        location
      }: any) => {
        if (user) {
          return React.cloneElement(children, { user });
        }

        if (!user) {
          return (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
}
