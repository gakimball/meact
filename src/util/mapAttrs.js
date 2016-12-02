/**
 * Map an array of attributes from a markdown-it token into an object. The object can be applied to a JSX element using the spread operator.
 * @param {Array[]} attrs - Attributes to map.
 * @param {Object.<String, String>} Mapped attributes.
 */
export default function mapAttrs(attrs = []) {
  if (attrs === null) {
    return {};
  }

  const output = {};

  attrs.map(([name, value]) => {
    output[name] = value;
  });

  return output;
}
