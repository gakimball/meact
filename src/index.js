import React, { PropTypes } from 'react';
import markdownIt from 'markdown-it';
import ast from './util/ast';
import renderTokens from './util/renderTokens';
import components from './components';

/**
 * Renders React components from a Markdown string.
 * @todo Allow for custom components.
 */
export default function Markdown({ input, renderer }) {
  const { nodes } = ast(renderer.parse(input));

  return (
    <div>
      {renderTokens(nodes, components)}
    </div>
  );
}

/**
 * Props that can be passed to `<Markdown />`.
 * @type Object
 * @prop {String} input - Markdown string.
 * @prop {Object} [renderer] - markdown-it instance.
 */
Markdown.propTypes = {
  input: PropTypes.string.isRequired,
  renderer: PropTypes.object,
}

/**
 * Default props for `<Markdown />`.
 * @type Object
 */
Markdown.defaultProps = {
  renderer: markdownIt(),
}
