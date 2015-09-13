import React from 'react';
import numeral from 'numeral';
import numeralPtBr from 'numeral/languages/pt-br';

numeral.language('pt-br', numeralPtBr);
numeral.language('pt-br');

export default class BuyPrice extends React.Component {
  render () {
    return (
      <div className="form-group">
        <label htmlFor="buy-price-range">Por quanto você comprou o carro?</label>
        <input type="range" className="form-control" id="buy-price-range" min="5000" max="100000" step="500" onChange={this.onChange.bind(this)} value={this.buyPrice()} />
        <span className="help-block">{this.formattedBuyPrice()}</span>
      </div>
    );
  }

  buyPrice () {
    return this.props.cursor.refine('buyPrice').value;
  }

  formattedBuyPrice () {
    return numeral(this.buyPrice()).format('$ 0,0.00');
  }

  onChange (e) {
    this.props.cursor.refine('buyPrice').set(+e.target.value);
  }
}
