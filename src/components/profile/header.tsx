// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import useUser from '../../hooks/use-user';
import { isUserFollowingProfile, toggleFollow } from '../../services/users';
import UserContext from '../../context/user';

type Props = {
    photosCount: number;
    followerCount: number;
    setFollowerCount: (...args: any[]) => any;
    profile: {
        docId?: string;
        userId?: string;
        username?: string;
        fullName?: string;
        following?: string[];
        followers?: string[];
    };
};

export default function Header({ photosCount, followerCount, setFollowerCount, profile: { docId: profileDocId, userId: profileUserId, username: profileUsername, fullName, following, followers, }, }: Props) {
  const { user: loggedInUser } = useContext(UserContext);
  const { user } = useUser(loggedInUser?.uid);
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  const isActiveBtnFollow =
    user?.username && user?.username !== profileUsername;

  const handleToggleFollow = async () => {
    setIsFollowingProfile((isFollowingProfile: any) => !isFollowingProfile);
    setFollowerCount({
      followerCount: isFollowingProfile ? followerCount - 1 : followerCount + 1,
    });
    await toggleFollow(
      isFollowingProfile,
      user.docId,
      profileDocId,
      profileUserId,
      user.userId
    );
  };

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isUserFollowingProfile(
        user?.username,
        profileUserId
      );

      setIsFollowingProfile(isFollowing);
    };

    if (user?.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }
  }, [user?.username, profileUserId]);

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div className="container flex justify-center items-center">
        {profileUsername && (
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <img
            className="rounded-full w-40 h-40 flex"
            alt={`${profileUsername} profile`}
            src={`/images/avatars/${profileUsername}.jpg`}
          />
        )}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div className="flex items-center justify-center flex-col col-span-2">
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div className="container flex items-center">
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <p className="text-2xl mr-4">{profileUsername}</p>
          {isActiveBtnFollow && (
            // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button
              className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
              type="button"
              onClick={handleToggleFollow}
              onKeyDown={(event: any) => {
                if (event.key === 'Enter') {
                  handleToggleFollow();
                }
              }}
            >
              {isFollowingProfile ? 'Unfollow' : 'Follow'}
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </button>
          )}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div className="container flex mt-4">
          {!followers || !following ? (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Skeleton count={1} width={677} height={24} />
          ) : (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              <p className="mr-10">
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <span className="font-bold">
                  {photosCount}
                  {` `}
                  {photosCount === 1 ? `photo` : `photos`}
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                </span>
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              </p>
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              <p className="mr-10">
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <span className="font-bold">
                  {followerCount}
                  {` `}
                  {followerCount === 1 ? `follower` : `followers`}
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                </span>
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              </p>
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              <p className="mr-10">
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <span className="font-bold">
                  {following.length}
                  {` `}
                  {following.length === 1 ? `following` : `followings`}
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                </span>
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              </p>
            </>
          )}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div className="container mt-4">
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <p className="font-medium">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            {!fullName ? <Skeleton cout={1} height={24} /> : fullName}
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          </p>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  );
}
