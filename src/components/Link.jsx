import mapAttrs from '../util/mapAttrs';
import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders a `link` token.
 */
export default function Link({ token, components }) {
  return <a {...mapAttrs(token.nodes[0].attrs)}>{renderTokens(token.nodes.slice(1, -1), components)}</a>;
}

Link.propTypes = tokenPropTypes;
