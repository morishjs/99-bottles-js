const _ = require('lodash');

class Bottles {
  verse(number) {
    const bottleNumber = this.bottleNumberFor(number);
    const successorBottleNumber = this.bottleNumberFor(bottleNumber.successor());



    return (
      `${_.capitalize(bottleNumber.toString())} of beer on the wall, ` +
      `${bottleNumber.toString()} of beer.\n` +
      bottleNumber.action() +
      `${successorBottleNumber.toString()} of beer on the wall.\n`
    );
  }

  bottleNumberFor(number) {
    switch (number) {
      case 0:
        return new BottleNumber0(number);
      case 1:
        return new BottleNumber1(number);
      default:
        return new BottleNumber(number);
    }
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }

  successor() {
    return this.number - 1;
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around, `;
  }

  container() {
    return 'bottles';
  }

  pronoun() {
    if (arguments.length !== 0) {
      throw new Error('');
    }
    return 'one';
  }

  quantity() {
    if (arguments.length !== 0) {
      throw new Error('');
    }
    return this.number.toString();
  }
}

class BottleNumber0 extends BottleNumber {

  quantity() {
    if (arguments.length !== 0) {
      throw new Error('');
    }
    return 'no more';
  }

  action() {
    return 'Go to the store and buy some more, ';
  }

  successor() {
    return 99;
  }
}

class BottleNumber1 extends BottleNumber {
  container() {
    return 'bottle';
  }

  pronoun() {
    if (arguments.length !== 0) {
      throw new Error('');
    }
    return 'it';
  }
}


export { Bottles, BottleNumber, BottleNumber0, BottleNumber1 };
