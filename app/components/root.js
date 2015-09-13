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
        <BuyPrice cursor={cursor.refine('car')} />
      </form>
    );
  }
}
