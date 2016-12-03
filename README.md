# meact

> Customizable Markdown React renderer

[![Travis](https://img.shields.io/travis/gakimball/meact.svg?maxAge=2592000)](https://travis-ci.org/gakimball/meact) [![npm](https://img.shields.io/npm/v/meact.svg?maxAge=2592000)](https://www.npmjs.com/package/meact)

## Installation

```bash
npm install meact
```

The library has two peer dependencies:

```
{
  "react": "15.x",
  "markdown-it": "^8.1.0"
}
```

## Usage

```jsx
import Markdown from 'meact';

text = `
# Zombo.com

Welcome to [Zombo.com](http://zombo.com). This is Zombo.com. Welcome. This is Zombo.com. Welcome to Zombo.com. You can do anything at Zombo.com. Anything at all. The only limit is yourself. Welcome to Zombo.com. Welcome to Zombo.com. This is Zombo.com. Welcome to Zombo.com. This is Zombo.com, welcome!

Yes, this is Zombo.com. This is Zombo.com, and welcome to you who have come to Zombo.com. Anything is possible at Zombo.com. You can do anything at Zombo.com. The infinite is possible is Zombo.com. The unattainable is unknown at Zombo.com. Welcome to Zombo.com. This is Zombo.com. Welcome to Zombo.com. Welcome. This is Zombo.com. Welcome to Zombo.com! Welcome to Zombo.com.
`;

<Markdown input={text} />
```

If you're not using a module loader, in the browser you can access the Markdown component on `window.meact.default`.

## Customization

You can pass in a custom instance of markdown-it to the `<Markdown />` component.

```jsx
import markdownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';

const renderer = markdownIt().use(emoji);

<Markdown renderer={renderer} />
```

You can also use custom components for any Markdown feature. Pass an object of React component functions/classes to the `components` prop of `<Markdown />`. Each key in the component list should be a Markdown feature&mdash;this could be a built-in feature, like `paragraph` or `list_item`, or it might be a feature from a plugin.

```jsx
const components = {
  paragraph: ({ token, renderTokens }) => <p>renderTokens(token.nodes.slice(1, -1))</p>,
};

<Markdown input="The infinite is possible." components={components} />
```

Custom renderers get two props: `token`, which is the token being rendered, and `renderTokens`, a function to render the child nodes of the current token.

Note the use of `slice()` when rendering the child tokens. Many Markdown features are represented as a set of three tokens: the `open` token (the first one), the `close` token (the last one), and then everything in the middle. In the case of a paragraph, as shown above, the first token in `token.nodes` is `paragraph_open`, and the last one is `paragraph_close`. The *middle* token has the actual text content, and can be recursively rendered. So, we slice out the first and last tokens in the list when rendering children.

Not all Markdown features require this, but many do. When in doubt, inspect the contents of `token` and adjust your component to match what's there.

## Feature Support

All of markdown-it's built-in features will render as React-based HTML. Plugins should work, but haven't been tested yet.

Features known not to work include:
  - Reference links

Features that are wonky:
  - List items have `<p>` elements inside them, even if the item is one line of text.

## Local Development

```bash
git clone https://github.com/gakimball/meact
cd meact
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
