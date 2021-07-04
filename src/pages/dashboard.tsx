// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useEffect } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/header' was resolved to '/Us... Remove this comment to see the full error message
import Header from '../components/header';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/sidebar' was resolved to '/U... Remove this comment to see the full error message
import Sidebar from '../components/sidebar';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/timeline' was resolved to '/... Remove this comment to see the full error message
import Timeline from '../components/timeline';
import useUser from '../hooks/use-user';
import LoggedInUserContext from '../context/logged-in-user';

type Props = {
    user: any;
};

export default function Dashboard({ user: loggedInUser }: Props) {
  const { user } = useUser(loggedInUser.uid);
  useEffect(() => {
    document.title = 'Minestagram';
  }, []);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <LoggedInUserContext.Provider value={{ user }}>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div className="bg-gray-background">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Header />
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Timeline />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Sidebar />
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    </LoggedInUserContext.Provider>
  );
}
