import React from 'react/addons';
import Root from 'components/root';
import {expect} from 'chai';
import shallowRenderer from 'shallow_renderer';
import BuyPrice from 'components/car/buy_price';

describe('Foo', () => {
  it('renders the right template', () => {
    expect(shallowRenderer(<Root />)).to.eql(
      <BuyPrice />
    );
  });
});
