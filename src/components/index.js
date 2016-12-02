import Blockquote from './Blockquote';
import BulletList from './BulletList';
import CodeInline from './CodeInline';
import Emphasis from './Emphasis';
import Fence from './Fence';
import Heading from './Heading';
import Hr from './Hr';
import Image from './Image';
import Inline from './Inline';
import Link from './Link';
import ListItem from './ListItem';
import OrderedList from './OrderedList';
import Paragraph from './Paragraph';
import Softbreak from './Softbreak';
import Strikethrough from './Strikethrough';
import Strong from './Strong';
import Text from './Text';

/**
 * Default components to render Markdown. Each property is a markdown-it token type and a corresponding React component to render that token.
 * @constant
 * @type Object.<String, Class>
 */
export default {
  blockquote: Blockquote,
  bullet_list: BulletList,
  code_inline: CodeInline,
  em: Emphasis,
  fence: Fence,
  heading: Heading,
  hr: Hr,
  image: Image,
  inline: Inline,
  link: Link,
  list_item: ListItem,
  ordered_list: OrderedList,
  paragraph: Paragraph,
  s: Strikethrough,
  softbreak: Softbreak,
  strong: Strong,
  text: Text,
};
