import React from 'react';
import BuyPrice from './car/buy_price';
import {Cursor} from 'react-cursor';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {
        buyPrice: 30000
      }
    };
  }

  render () {
    const cursor = Cursor.build(this);

    return (
      <form>
        <header>
          <h1 className="container">Será que eu deveria comprar um carro?</h1>
        </header>
        <section className="container">
          <h2>Configure seu carro</h2>
          <hr />
          <BuyPrice cursor={cursor.refine('car')} />
        </section>
      </form>
    );
  }
}
