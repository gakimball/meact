module.exports = markdownItAst;

/**
 * Create an AST from a markdown-it token stream.
 * @param {Object[]} tokens - markdown-it token stream.
 * @param {Boolean} [sub=false] - If `true`, the top-level node is being rendered.
 * @returns {Object} Nodes representing Markdown structure.
 */
function markdownItAst(tokens, sub = false) {
  const node = {
    nodes: [],
    type: 'root',
  };
  const nodes = [node];
  const stack = [];

  const len = tokens.length;
  let idx = -1;

  while (++idx < len) {
    const tok = tokens[idx];
    const prev = last();

    if (/_open$/.test(tok.type)) {
      const token = {
        type: tok.type.replace(/_open$/, ''),
        nodes: [tok],
      };
      prev.nodes.push(token);
      stack.push(token);
    }
    else if (/_close$/.test(tok.type)) {
      const parent = stack.pop();
      parent.nodes.push(tok);
    }
    else if (tok.type === 'inline' && tok.children) {
      tok.nodes = markdownItAst(tok.children, true);
      delete tok.children;
      prev.nodes.push(tok);
    }
    else {
      prev.nodes.push(tok);
    }
  }

  function last() {
    return stack.length
      ? stack[stack.length - 1]
      : nodes[nodes.length - 1];
  }

  if (sub) {
    return node.nodes;
  }
  else {
    return node;
  }
}
