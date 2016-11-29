import mapAttrs from '../util/mapAttrs';
import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders an `image` token.
 */
export default function Image({ token, components }) {
  return <img {...mapAttrs(token.attrs)} />;
}

Image.propTypes = tokenPropTypes;
