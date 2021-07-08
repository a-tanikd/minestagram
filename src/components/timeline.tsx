/* eslint-disable no-nested-ternary */
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import Post from './post';
import LoggedInUserContext from '../context/logged-in-user';
import Photo from '../types/photo';

export default function Timeline() {
  const user = useContext(LoggedInUserContext);
  const photos = usePhotos(user!);

  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        photos.map((photo: Photo) => <Post key={photo.docId} content={photo} />)
      )}
    </div>
  );
}
