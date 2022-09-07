const _ = require('lodash');

class Bottles {
  verse(number) {
    const bottleNumber = new BottleNumber(number);
    const successorBottleNumber = new BottleNumber(bottleNumber.successor());

    return (
      `${_.capitalize(bottleNumber.quantity())} ${bottleNumber.container(
        
      )} of beer on the wall, ` +
      `${bottleNumber.quantity()} ${bottleNumber.container()} of beer.\n` +
      bottleNumber.action() +
      `${successorBottleNumber.quantity()} ${successorBottleNumber.container()} of beer on the wall.\n`
    );
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  successor() {
    if (this.number === 0) {
      return 99;
    } else {
      return this.number - 1;
    }
  }

  action() {
    if (this.number === 0) {
      return 'Go to the store and buy some more, ';
    } else {
      return `Take ${this.pronoun()} down and pass it around, `;
    }
  }

  container() {
    if (this.number === 1) {
      return 'bottle';
    } else {
      return 'bottles';
    }
  }

  pronoun() {
    if (arguments.length !== 0) {
      throw new Error('');
    }

    if (this.number === 1) {
      return 'it';
    } else {
      return 'one';
    }
  }

  quantity() {
    if (arguments.length !== 0) {
      throw new Error('');
    }

    if (this.number === 0) {
      return 'no more';
    } else {
      return this.number.toString();
    }
  }
}


export {Bottles, BottleNumber};
