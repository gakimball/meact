import React from 'react';
import selfClosingTags from '@f/self-closing-tags';
import mapAttrs from './mapAttrs';

/**
 * Render components from a Markdown AST.
 * @param {Object[]} tokens - Tokens to render.
 * @returns {ReactElement[]} Series of React components.
 */
export default function renderTokens(tokens, components) {
  return tokens.map((token, index) => {
    let Tag = 'span';
    let attrs = [];
    let content = '';

    // Use a custom component if it exists for this token type
    if (token.type in components) {
      const Token = components[token.type];
      return <Token token={token} components={components} key={index} />;
    }

    // Inline tokens have no tag, they just render child nodes
    if (token.type === 'inline') {
      return renderTokens(token.nodes || [], components);
    }
    // Text tokens have no tag, they just render their contents
    else if (token.type === 'text') {
      return token.content
    }
    // Tokens with nodes are wrappers
    // The first and last nodes are the "open" and "close" tokens
    // The "open" token has the metadata for the tag
    // Everything in between the "open" and "close" tokens is rendered inside this element as inner content
    else if (token.nodes) {
      if (token.nodes.length > 0) {
        Tag = token.nodes[0].tag;
        attrs = token.nodes[0].attrs;
        content = renderTokens(token.nodes.slice(1, -1), components);
      }
    }
    // Standalone tokens
    else {
      Tag = token.tag;
      content = token.content;
      attrs = token.attrs;
    }

    // These tags are self-closing
    // The AST doesn't indicate which tokens use self-closing tags, so they're all written out here
    if (selfClosingTags.indexOf(Tag) > -1) {
      return <Tag {...mapAttrs(attrs)} key={index} />
    }
    // All other tags are standard
    else {
      return <Tag {...mapAttrs(attrs)} key={index}>{content}</Tag>
    }
  });
}
