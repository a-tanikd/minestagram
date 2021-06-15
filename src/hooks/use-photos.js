import { useEffect, useState } from 'react';
import { getPhotos } from '../services/firebase';

export default function usePhotos(user) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getTimelinePhotos() {
      if (user?.following?.length > 0) {
        const followedUserPhotos = await getPhotos(user.userId, user.following);
        followedUserPhotos.sort((a, b) => b.dateCreatedAt - a.dateCreatedAt);
        setPhotos(followedUserPhotos);
      }
    }

    getTimelinePhotos();
  }, [user.following, user.userId]);

  return { photos };
}
