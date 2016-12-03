import { expect } from 'chai';
import markdownIt from 'markdown-it';
import ast from '../ast';

const md = markdownIt();

describe('ast()', () => {
  let tree;

  before(() => {
    tree = ast(md.parse('Hello.'));
  });

  it('defines a root node', () => {
    expect(tree.type).to.equal('root');
    expect(tree.nodes).to.be.an('array');
  });

  it('groups related tokens into a node', () => {
    expect(tree.nodes[0].type).to.equal('paragraph');
  });

  it('first token in a group is "open"', () => {
    expect(tree.nodes[0].nodes[0].type).to.equal('paragraph_open');
  });

  it('last token in a group is "close"', () => {
    const nodes = tree.nodes[0].nodes;
    expect(nodes[nodes.length - 1].type).to.equal('paragraph_close');
  });

  it('copies children of an inline token to a "nodes" property', () => {
    expect(tree.nodes[0].nodes[1].nodes).to.be.an('array');
    expect(tree.nodes[0].nodes[1].children).to.not.exist;
  });
});
