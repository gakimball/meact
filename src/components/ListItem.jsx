import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders a `list_item` token.
 */
export default function ListItem({ token, components }) {
  return <li>{renderTokens(token.nodes.slice(1, -1), components)}</li>
}

ListItem.propTypes = tokenPropTypes;
