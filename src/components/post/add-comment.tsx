// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useContext, useState } from 'react';
import UserContext from '../../context/user';
import { addPhotoComment } from '../../services/photos';

type Props = {
    docId: string;
    comments: any[];
    setComments: (...args: any[]) => any;
    commentInput: any;
};

export default function AddComment({ docId, comments, setComments, commentInput, }: Props) {
  const [comment, setComment] = useState('');
  const {
    user: { displayName },
  } = useContext(UserContext);

  const handleSubmitComment = (event: any) => {
    event.preventDefault();

    setComments([...comments, { displayName, comment }]);
    setComment('');

    return addPhotoComment(docId, displayName, comment);
  };

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="border-t border-gray-primary">
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <form
        className="flex justify-between pl-0 pr-5"
        method="POST"
        onSubmit={(event: any) => comment.length >= 1
          ? handleSubmitComment(event)
          : event.preventDefault()
        }
      >
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <input
          aria-label="Add comment"
          autoComplete="off"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="text"
          name="add-comment"
          placeholder="Add a comment ..."
          value={comment}
          onChange={({
            target
          }: any) => setComment(target.value)}
          ref={commentInput}
        />
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <button
          className={`text-sm font-bold text-blue-medium ${
            !comment && 'opacity-25'
          }`}
          type="button"
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          Post
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </button>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </form>
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  );
}
