/* eslint-disable no-nested-ternary */
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
// @ts-expect-error ts-migrate(6142) FIXME: Module './suggested-profile' was resolved to '/Use... Remove this comment to see the full error message
import SuggestedProfile from './suggested-profile';
import { getSuggestedProfiles } from '../../services/users';

type Props = {
    loggedInUserId?: string;
    following?: string[];
    loggedInUserDocId?: string;
};

export default function Suggestions({ loggedInUserId, following, loggedInUserDocId, }: Props) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const result = await getSuggestedProfiles(loggedInUserId, following);
      setProfiles(result);
    }

    if (loggedInUserId) {
      suggestedProfiles();
    }
  }, [loggedInUserId, following]);

  return !profiles ? (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="rounded flex flex-col">
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div className="text-sm flex items-center aligin-items justify-between mb-2">
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <p className="font-bold text-gray-base">Suggestions for you</p>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div className="mt-4 grid gap-5">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {profiles.map((profile: any) => <SuggestedProfile
          key={profile.docId}
          profileDocId={profile.docId}
          username={profile.username}
          profileId={profile.userId}
          loggedInUserId={loggedInUserId}
          loggedInUserDocId={loggedInUserDocId}
        />)}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  ) : null;
}
