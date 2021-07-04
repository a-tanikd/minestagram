// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route, Redirect } from 'react-router-dom';

export default function IsUserLoggedIn({
  user,
  loggedInPath,
  children,
  ...rest
}: any) {
  return (
    <Route
      {...rest}
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'render'.
      render={({ location }) => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
              to={{
                // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                pathname: loggedInPath,
                // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'state'.
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

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
  loggedInPath: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
