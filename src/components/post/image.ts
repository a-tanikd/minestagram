// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

export default function Image({
  src,
  caption
}: any) {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
  return <img src={src} alt={caption} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
