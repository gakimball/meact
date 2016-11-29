/**
 * Render a series of components that correspond to tokens in a token stream.
 * @param {Object[]} tokens - Tokens to render.
 * @param {Object.<String, Object>} components - Component list to reference.
 * @returns {ReactElement[]} Series of React components.
 */
export default function renderTokens(tokens, components) {
  return tokens.map((token, index) => {
    const Token = components[token.type];
    if (!Token) {
      console.log(`Unrecognized token type: ${token.type}`);
      return null;
    }

    return <Token key={index} token={token} components={components} />;
  });
}
