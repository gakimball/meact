import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import markdownIt from 'markdown-it';
import Markdown from '../Markdown';

describe('<Markdown />', () => {
  it('converts Markdown to HTML', () => {
    const wrapper = shallow(<Markdown input="Hello world." />);
    expect(wrapper).to.contain.html('<p>Hello world.</p>');
  });

  it('allows custom components to be added', () => {
    const components = {
      paragraph: () => <span></span>,
    }
    const wrapper = shallow(<Markdown input="Goodbye world." components={components} />);
    expect(wrapper).to.contain.html('<span></span>');
  });

  it('allows a custom instance of markdown-it to be used', () => {
    const renderer = markdownIt().disable('emphasis');
    const wrapper = shallow(<Markdown input="Hello **world.**" renderer={renderer} />);
    expect(wrapper).to.contain.text('Hello **world.**');
  });
});
