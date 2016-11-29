import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders a `blockquote` token.
 */
export default function Blockquote({ token, components }) {
  return <blockquote>{renderTokens(token.nodes.slice(1, -1), components)}</blockquote>
}

Blockquote.propTypes = tokenPropTypes;
