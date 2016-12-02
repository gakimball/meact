import mapAttrs from '../mapAttrs';
import { expect } from 'chai';

describe('mapAttrs()', () => {
  it('converts an array of attributes to an object', () => {
    const attrs = [
      ['href', 'http://zombo.com'],
      ['target', '_blank'],
    ];
    expect(mapAttrs(attrs)).to.eql({
      href: 'http://zombo.com',
      target: '_blank',
    });
  });

  it('returns an empty object if a null value is passed', () => {
    expect(mapAttrs(null)).to.eql({});
  });
});
