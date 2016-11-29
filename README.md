# meact

> Customizable Markdown React renderer

[![Travis](https://img.shields.io/travis/gakimball/meact.svg?maxAge=2592000)](https://travis-ci.org/gakimball/meact) [![npm](https://img.shields.io/npm/v/meact.svg?maxAge=2592000)](https://www.npmjs.com/package/meact)

## Installation

```bash
npm install meact
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

## Local Development

```bash
git clone https://github.com/gakimball/meact
cd meact
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
