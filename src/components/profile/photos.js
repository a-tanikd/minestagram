import PropTypes from 'prop-types';

export default function Photos({ photos }) {
  return <p>I am photos.</p>;
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
};
