// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useEffect, useReducer } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './header' was resolved to '/Users/akito/sr... Remove this comment to see the full error message
import Header from './header';
import Photos from './photos';
import { getUserPhotosByUserId } from '../../services/photos';

type Props = {
  user: {
    docId: string;
    dateCreated: number;
    emailAddress: string;
    followers: string[];
    following: string[];
    fullName: string;
    userId: string;
    username: string;
  };
};

export default function Profile({ user }: Props) {
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'state' implicitly has an 'any' type.
  const reducer = (state, newState) => ({
    ...state,
    ...newState,
  });
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0,
  };

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUserId(user.userId);

      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }
    getProfileInfoAndPhotos();
  }, [user]);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Header
        photosCount={photosCollection?.length ?? 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Photos photos={photosCollection} />
    </>
  );
}
