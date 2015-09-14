import React from 'react/addons';
import BuyPrice from 'components/car/buy_price';
import {expect} from 'chai';
import reactRender from 'react_render';
import {Cursor} from 'react-cursor';

const TestUtils = React.addons.TestUtils;

describe('Buy Price component', () => {
  let rendered, cursor;

  beforeEach(() => {
    let CursorComponent = React.createClass({
      getInitialState: () => ({buyPrice: 10000}),
      render: function () {
        cursor = Cursor.build(this);

        return <BuyPrice cursor={cursor} />;
      }
    });

    reactRender(<CursorComponent />);
  });

  it('renders a range selector', () => {
    expect(document.querySelector('input[type=range]')).to.exist;
  });

  it('renders the buy price formatted', () => {
    expect(document.querySelector('.help-block').innerHTML).to.equal('R$ 10.000,00');
  });

  it('updates buy price when range selector changes', () => {
    let range = document.querySelector('#buy-price-range');
    range.value = '15000';
    TestUtils.Simulate.change(range);

    expect(cursor.refine('buyPrice').value).to.equal(15000);
    expect(document.querySelector('.help-block').innerHTML).to.equal('R$ 15.000,00');
  });

  it('has a link to tabela fipe', () => {
    expect(document.querySelector('a[href="http://www.fipe.org.br/pt-br/indices/veiculos/"]')).to.exist;
  });
});
