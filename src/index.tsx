import './wdyr';

// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactDOM from 'react-dom';
// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to '/Users/akito/src/g... Remove this comment to see the full error message
import App from './App';
import './styles/app.css';

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
ReactDOM.render(<App />, document.getElementById('root'));
