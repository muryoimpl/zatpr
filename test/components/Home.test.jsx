import assert from 'power-assert';
import React  from 'react';

import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
import jsdomReact from '../helpers/jsdom';

import Home from '../../components/Home';

function componentSetup() {
  const component = renderIntoDocument(<Home />);

  return {
    component: component,
    p: findRenderedDOMComponentWithClass(component, 'title')
  };
}

describe('Home', () => {
  jsdomReact();

  it('should display title', () => {
    const { p } = componentSetup();

    assert(p.textContent, 'こんにちは');
  });
});
