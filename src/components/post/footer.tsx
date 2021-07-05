// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

export default function Footer({ caption, username }: any) {
  return (
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div className="p-4 pt-2 pb-0">
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
      <span className="mr-1 font-bold">{username}</span>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
      <span>{caption}</span>
    </div>
  );
}

Footer.propTypes = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
