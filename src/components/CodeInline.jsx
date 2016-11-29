import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders a `code_inline` token.
 */
export default function CodeInline({ token, components }) {
  return <code>{token.content}</code>
}

CodeInline.propTypes = tokenPropTypes;
