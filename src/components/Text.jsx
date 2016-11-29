import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders a `text` token.
 */
export default function Text({ token }) {
  return <span>{token.content}</span>;
}

Text.propTypes = tokenPropTypes;
