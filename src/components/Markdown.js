import React, { PropTypes } from 'react';
import assign from 'lodash.assign';
import markdownIt from 'markdown-it';
import ast from '../util/ast';
import renderTokens from '../util/renderTokens';
import defaultComponents from '../components';

/**
 * Renders React components from a Markdown string.
 * @todo Allow for custom components.
 */
export default function Markdown({ input, renderer, components = {} }) {
  const { nodes } = ast(renderer.parse(input));

  return (
    <div>
      {renderTokens(nodes, assign({}, defaultComponents, components))}
    </div>
  );
}

/**
 * Props that can be passed to `<Markdown />`.
 * @type Object
 * @prop {String} input - Markdown string.
 * @prop {Object} [renderer] - markdown-it instance.
 * @prop {Object.<String, Class>} [components] - Custom components.
 */
Markdown.propTypes = {
  input: PropTypes.string.isRequired,
  renderer: PropTypes.object,
  components: PropTypes.objectOf(PropTypes.func),
}

/**
 * Default props for `<Markdown />`.
 * @type Object
 */
Markdown.defaultProps = {
  renderer: markdownIt(),
}
