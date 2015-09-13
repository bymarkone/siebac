import {foo} from 'components/foo';
import {expect} from 'chai';

describe('Foo', () => {
  it('returns bar', () => {
    expect(foo).to.equal('bar');
  });
});
