// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useState } from 'react';
import { formatDistance } from 'date-fns';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
// @ts-expect-error ts-migrate(6142) FIXME: Module './add-comment' was resolved to '/Users/aki... Remove this comment to see the full error message
import AddComment from './add-comment';

type Props = {
    docId: string;
    comments: any[];
    posted: number;
    commentInput: any;
};

export default function Comments({ docId, comments: allComments, posted, commentInput, }: Props) {
  const [comments, setComments] = useState(allComments);
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <div className="p-4 pt-1 pb-4">
      {comments.length >= 3 && (
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <p className="text-sm text-gray-base mb-1 cursor-pointer">
          View all {allComments.length} comments
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </p>
      )}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      {comments.slice(0, 3).map((item: any) => <p key={`${item.comment}-${item.displayName}`} className="mb-1">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Link to={`/p/${item.displayName}`}>
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <span className="mr-1 font-bold">{item.displayName}</span>
        </Link>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <span>{item.comment}</span>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </p>)}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <p className="text-gray-base uppercase text-xs mt-2">
        {formatDistance(posted, new Date())} ago
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </p>
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <AddComment
      docId={docId}
      comments={comments}
      setComments={setComments}
      commentInput={commentInput}
    />
  </>;
}
