import { useContext, useState } from 'react';
import LoggedInUserContext from '../../context/logged-in-user';
import { addPhotoComment } from '../../services/photos';

type Props = {
  docId: string;
  comments: any[];
  setComments: (...args: any[]) => any;
  commentInput: any;
};

export default function AddComment({
  docId,
  comments,
  setComments,
  commentInput,
}: Props) {
  const [comment, setComment] = useState('');
  const { username } = useContext(LoggedInUserContext)!;

  const handleSubmitComment = (event: any) => {
    event.preventDefault();

    setComments([...comments, { username, comment }]);
    setComment('');

    return addPhotoComment(docId, username, comment);
  };

  return (
    <div className="border-t border-gray-primary">
      <form
        className="flex justify-between pl-0 pr-5"
        method="POST"
        onSubmit={(event: any) =>
          comment.length >= 1
            ? handleSubmitComment(event)
            : event.preventDefault()
        }
      >
        <input
          aria-label="Add comment"
          autoComplete="off"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="text"
          name="add-comment"
          placeholder="Add a comment ..."
          value={comment}
          onChange={({ target }: any) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-medium ${
            !comment && 'opacity-25'
          }`}
          type="button"
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}
