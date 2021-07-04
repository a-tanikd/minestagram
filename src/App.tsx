// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { lazy, Suspense } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';

// @ts-expect-error ts-migrate(6142) FIXME: Module './helpers/protected-route' was resolved to... Remove this comment to see the full error message
import ProtectedRoute from './helpers/protected-route';
import IsUserLoggedIn from './helpers/is-user-logged-in';

// @ts-expect-error ts-migrate(6142) FIXME: Module './pages/login' was resolved to '/Users/aki... Remove this comment to see the full error message
const Login = lazy(() => import('./pages/login'));
// @ts-expect-error ts-migrate(6142) FIXME: Module './pages/sign-up' was resolved to '/Users/a... Remove this comment to see the full error message
const SignUp = lazy(() => import('./pages/sign-up'));
// @ts-expect-error ts-migrate(6142) FIXME: Module './pages/dashboard' was resolved to '/Users... Remove this comment to see the full error message
const Dashboard = lazy(() => import('./pages/dashboard'));
// @ts-expect-error ts-migrate(6142) FIXME: Module './pages/profile' was resolved to '/Users/a... Remove this comment to see the full error message
const Profile = lazy(() => import('./pages/profile'));
// @ts-expect-error ts-migrate(6142) FIXME: Module './pages/not-found' was resolved to '/Users... Remove this comment to see the full error message
const NotFound = lazy(() => import('./pages/not-found'));

export default function App() {
  const { user } = useAuthListener();

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <UserContext.Provider value={{ user }}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Router>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Suspense fallback={<p>Loading...</p>}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Switch>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <IsUserLoggedIn
              user={user}
              loggedInPath={ROUTES.DASHBOARD}
              path={ROUTES.LOGIN}
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Login />
            </IsUserLoggedIn>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <IsUserLoggedIn
              user={user}
              loggedInPath={ROUTES.DASHBOARD}
              path={ROUTES.SIGN_UP}
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <SignUp />
            </IsUserLoggedIn>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Route path={ROUTES.PROFILE} component={Profile} />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Dashboard />
            </ProtectedRoute>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
