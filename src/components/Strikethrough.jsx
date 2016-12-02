import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders an `em` token.
 */
export default function Strikethrough({ token, components }) {
  return <del>{renderTokens(token.nodes.slice(1, -1), components)}</del>
}

Strikethrough.propTypes = tokenPropTypes;
