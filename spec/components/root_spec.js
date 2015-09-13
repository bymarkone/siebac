import React from 'react/addons';
import {expect, matched} from 'chai';
import Root from 'components/root';
import BuyPrice from 'components/car/buy_price';

const TestUtils = React.addons.TestUtils;

describe('Foo', () => {
  it('renders buy price', () => {
    let rendered = TestUtils.renderIntoDocument(<Root />)

    expect(TestUtils.findRenderedComponentWithType(rendered, BuyPrice)).to.be.an('object');
  });
});
