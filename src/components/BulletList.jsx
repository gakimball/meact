import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders a `bullet_list` token.
 */
export default function BulletList({ token, components }) {
  return <ul>{renderTokens(token.nodes.slice(1, -1), components)}</ul>
}

BulletList.propTypes = tokenPropTypes;
