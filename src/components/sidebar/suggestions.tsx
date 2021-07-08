/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import SuggestedProfile from './suggested-profile';
import { getSuggestedProfiles } from '../../services/users';
import User from '../../types/user';

type Props = {
  loggedInUserId?: string;
  following?: string[];
  loggedInUserDocId?: string;
};

export default function Suggestions({
  loggedInUserId,
  following,
  loggedInUserDocId,
}: Props) {
  const [profiles, setProfiles] = useState<User[]>([]);

  useEffect(() => {
    async function suggestedProfiles() {
      const result = await getSuggestedProfiles(
        loggedInUserId ?? '',
        following ?? []
      );
      setProfiles(result);
    }

    if (loggedInUserId) {
      suggestedProfiles();
    }
  }, [loggedInUserId, following]);

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center aligin-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-5">
        {profiles.map((profile: any) => (
          <SuggestedProfile
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            loggedInUserId={loggedInUserId ?? ''}
            loggedInUserDocId={loggedInUserDocId ?? ''}
          />
        ))}
      </div>
    </div>
  ) : null;
}
