import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTE from './constants/route';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTE.LOGIN} component={Login} exact />
          <Route path={ROUTE.SIGN_UP} component={SignUp} exact />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
