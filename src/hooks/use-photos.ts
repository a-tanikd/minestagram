import { useEffect, useState } from 'react';
import { getPhotos } from '../services/photos';
import Photo from '../types/photo';
import User from '../types/user';

export default function usePhotos(user: User): Photo[] {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    async function getTimelinePhotos() {
      if (user?.following?.length > 0) {
        const followedUserPhotos = await getPhotos(user.userId, user.following);
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
      }
    }
    getTimelinePhotos();
  }, [user?.following, user?.userId]);

  return photos;
}
