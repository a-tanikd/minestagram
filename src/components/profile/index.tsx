import { useEffect, useReducer } from 'react';
import Header from './header';
import Photos from './photos';
import { getUserPhotosByUserId } from '../../services/photos';
import User from '../../types/user';
import Photo from '../../types/photo';

type Props = {
  user: User;
};

type State = {
  profile: User;
  photosCollection: Photo[];
  followerCount: number;
};

export default function Profile({ user }: Props) {
  const reducer = (state: State, newState: State) => ({
    ...state,
    ...newState,
  });
  const initialState: State = {
    profile: {} as User,
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
    <>
      <Header
        photosCount={photosCollection?.length ?? 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </>
  );
}
