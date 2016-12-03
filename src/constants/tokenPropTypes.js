import { PropTypes } from 'react';

/**
 * React prop types used by all renderer components.
 * @constant
 * @type Object
 * @prop {Object} token - Token being rendered.
 * @prop {Function} renderTokens - Function to render child tokens.
 */
export default {
  token: PropTypes.object.isRequired,
  renderTokens: PropTypes.func.isRequired,
}
