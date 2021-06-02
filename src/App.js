import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTE from './constants/route';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/not-found'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTE.LOGIN} component={Login} exact />
          <Route path={ROUTE.SIGN_UP} component={SignUp} exact />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
