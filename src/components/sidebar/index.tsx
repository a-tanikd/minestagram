// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useContext } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './suggestions' was resolved to '/Users/aki... Remove this comment to see the full error message
import Suggestions from './suggestions';
import User from './user';
import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
  // @ts-expect-error ts-migrate(2525) FIXME: Initializer provides no value for this binding ele... Remove this comment to see the full error message
  const { user: { docId = '', fullName, username, userId, following } = {} } =
    useContext(LoggedInUserContext);

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="p-4">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <User username={username} fullName={fullName} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Suggestions
        loggedInUserId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  );
}

Sidebar.whyDidYouRender = true;
