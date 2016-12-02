import React, { PropTypes } from 'react';
import markdownIt from 'markdown-it';
import ast from './util/ast';
import renderTokens from './util/renderTokens';
import components from './components';

const md = new markdownIt();

/**
 * Renders React components from a Markdown string.
 * @todo Allow for custom markdown-it instance.
 * @todo Allow for custom components.
 */
export default function Markdown({ input }) {
  const { nodes } = ast(md.parse(input));

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
 */
Markdown.propTypes = {
  input: PropTypes.string.isRequired,
}
