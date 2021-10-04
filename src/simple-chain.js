import { NotImplementedError } from '../extensions/index.js';


export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink( value ) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink( position ) {
    if (position <= 0 || position > this.chain.length || (typeof (position) != 'number')) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    };
      this.chain.splice(position - 1, 1);
      return this
   
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let finalChain = this.chain.join('~~');
    this.chain = [];
    return finalChain
  }
};
/* npm run test -- test/simple-chain.test.js */