/* eslint-disable no-nested-ternary */
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';

export default function Timeline() {
  const { photos } = usePhotos();

  console.log(`photos`, photos);

  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} with={640} height={500} className="mb-5" />
      ) : photos?.length > 0 ? (
        photos.map((photo) => <p key={photo.docId}>{photo.imageSrc}</p>)
      ) : (
        <p className="text-center text-2xl">Follow peopele to see photos</p>
      )}
    </div>
  );
}
