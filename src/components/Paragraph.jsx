import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders a `paragraph` token.
 */
export default function Paragraph({ token, components }) {
  return <p>{renderTokens(token.nodes.slice(1, -1), components)}</p>
}

Paragraph.propTypes = tokenPropTypes;
