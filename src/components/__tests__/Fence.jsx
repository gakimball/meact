import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Fence from '../Fence';

describe('<Fence />', () => {
  let wrapper;
  const token = {
    content: `puts 'Hello World.'`,
  };

  before(() => {
    wrapper = shallow(<Fence token={token} renderTokens={() => {}} />);
  })

  it('wraps the content in a <pre> tag', () => {
    expect(wrapper).to.have.descendants('pre');
  });

  it('wraps the content in a <span> tag', () => {
    expect(wrapper).to.have.descendants('pre code');
  });

  it('includes the content', () => {
    expect(wrapper).to.contain.text(token.content);
  });
});
