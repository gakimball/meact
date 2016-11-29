import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders an `ordered_list` token.
 */
export default function OrderedList({ token, components }) {
  return <ol>{renderTokens(token.nodes.slice(1, -1), components)}</ol>
}

OrderedList.propTypes = tokenPropTypes;
