// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useEffect, useState } from 'react';
import { getPhotos } from '../services/photos';
export default function usePhotos(user: any) {
    const [photos, setPhotos] = useState(null);
    useEffect(() => {
        async function getTimelinePhotos() {
            if (user?.following?.length > 0) {
                const followedUserPhotos = await getPhotos(user.userId, user.following);
                followedUserPhotos.sort((a, b) => (b as any).dateCreatedAt - (a as any).dateCreatedAt);
                setPhotos(followedUserPhotos);
            }
        }
        getTimelinePhotos();
    }, [user.following, user.userId]);
    return { photos };
}
