import React from 'react/addons';
import BuyPrice from 'components/car/buy_price';
import {expect} from 'chai';
import shallowRenderer from 'shallow_renderer';

describe('Foo', () => {
  it('renders the right template', () => {
    expect(shallowRenderer(<BuyPrice />)).to.eql(
      <div>Foo</div>
    );
  });
});
