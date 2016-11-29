import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders a `strong` token.
 */
export default function Strong({ token, components }) {
  return <strong>{renderTokens(token.nodes.slice(1, -1), components)}</strong>
}

Strong.propTypes = tokenPropTypes;
