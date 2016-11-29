import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders a `heading` token.
 */
export default function Heading({ token, components }) {
  const Tag = token.nodes[0].tag;
  return <Tag>{renderTokens(token.nodes.slice(1, -1), components)}</Tag>
}

Heading.propTypes = tokenPropTypes;
