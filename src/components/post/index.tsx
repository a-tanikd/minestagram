// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useRef } from 'react';
import Header from './header';
import Image from './image';
// @ts-expect-error ts-migrate(6142) FIXME: Module './actions' was resolved to '/Users/akito/s... Remove this comment to see the full error message
import Actions from './actions';
import Footer from './footer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './comments' was resolved to '/Users/akito/... Remove this comment to see the full error message
import Comments from './comments';

type Props = {
  content?: {
    username: string;
    imageSrc: string;
    caption: string;
    docId: string;
    userLikedPhoto: boolean;
    likes: any[];
    comments: any[];
    dateCreated: number;
  };
};

export default function Post({ content }: Props) {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();
  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Header username={content.username} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Image src={content.imageSrc} caption={content.caption} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Actions
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        docId={content.docId}
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        totalLikes={content.likes.length}
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Footer caption={content.caption} username={content.username} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Comments
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        docId={content.docId}
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        comments={content.comments}
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        posted={content.dateCreated}
        commentInput={commentInput}
      />
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  );
}
