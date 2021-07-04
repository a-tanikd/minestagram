/* eslint-disable no-nested-ternary */
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
// @ts-expect-error ts-migrate(6142) FIXME: Module './post' was resolved to '/Users/akito/src/... Remove this comment to see the full error message
import Post from './post';
import LoggedInUserContext from '../context/logged-in-user';

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  const { photos } = usePhotos(user);

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="container col-span-2">
      {!photos ? (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Skeleton count={4} with={640} height={500} className="mb-5" />
      ) : (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        photos.map((photo: any) => <Post key={photo.docId} content={photo} />)
      )}
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  );
}
