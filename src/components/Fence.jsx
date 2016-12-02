import React from 'react';
import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../util/tokenPropTypes';

/**
 * Renders a `fence` token.
 */
export default function Fence({ token, components }) {
  return (
    <pre>
      <code>
        {token.content}
      </code>
    </pre>
  );
}

Fence.propTypes = tokenPropTypes;
