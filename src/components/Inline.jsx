import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders an `inline` token.
 */
export default function Inline({ token, components }) {
  return <span>{renderTokens(token.nodes, components)}</span>
}

Inline.propTypes = tokenPropTypes;
