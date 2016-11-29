import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders an `em` token.
 */
export default function Emphasis({ token, components }) {
  return <em>{renderTokens(token.nodes.slice(1, -1), components)}</em>
}

Emphasis.propTypes = tokenPropTypes;
