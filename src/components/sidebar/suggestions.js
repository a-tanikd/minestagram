/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import SuggestedProfile from './suggested-profile';
import { getSuggestedProfiles } from '../../services/firebase';

export default function Suggestions({
  loggedInUserId,
  following,
  loggedInUserDocId,
}) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const result = await getSuggestedProfiles(loggedInUserId, following);
      setProfiles(result);
    }

    if (loggedInUserId) {
      suggestedProfiles();
    }

    console.log(`profiles`, profiles);
  }, [loggedInUserId]);

  console.log(`profiles`, profiles);

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center aligin-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            loggedInUserId={loggedInUserId}
            loggedInUserDocId={loggedInUserDocId}
          />
        ))}
      </div>
    </div>
  ) : null;
}

Suggestions.propTypes = {
  loggedInUserId: PropTypes.string,
  following: PropTypes.arrayOf(PropTypes.string),
  loggedInUserDocId: PropTypes.string,
};
