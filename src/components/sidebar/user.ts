// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';

export default function User({
  username,
  fullName
}: any) {
  return !username || !fullName ? (
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'count'.
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      to={`/p/${username}`}
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'className'.
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div className="flex items-center justify-between col-span-1">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
        <img
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'className'.
          className="rounded-full w-16 flex mr-3"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
          src={`/images/avatars/${username}.jpg`}
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
          alt=""
        />
      </div>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div className="grid-span-3">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
        <p className="font-bold text-sm">{username}</p>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
}

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
