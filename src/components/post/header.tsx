// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

export default function Header({
  username
}: any) {
  return (
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div className="flex items-center">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        <Link to={`/p/${username}`} className="flex items-center">
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
          <img
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'className'.
            className="rounded-full h-8 w-8 flex mr-3"
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
            src={`/images/avatars/${username}.jpg`}
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
            alt={`${username} profile`}
          />
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
};
