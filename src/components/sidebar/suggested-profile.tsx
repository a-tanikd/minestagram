// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useState } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollower,
} from '../../services/users';

type Props = {
    profileDocId: string;
    username: string;
    profileId: string;
    loggedInUserId: string;
    loggedInUserDocId: string;
};

export default function SuggestedProfile({ profileDocId, username, profileId, loggedInUserId, loggedInUserDocId, }: Props) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);

    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollower(profileDocId, loggedInUserId, false);
  }

  return !followed ? (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="flex flex-row items-center align-items justify-between">
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div className="flex items-center justify-between">
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Link to={`/p/${username}`}>
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <p className="font-bold text-sm">{username}</p>
        </Link>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={handleFollowUser}
      >
        Follow
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </button>
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  ) : null;
}
