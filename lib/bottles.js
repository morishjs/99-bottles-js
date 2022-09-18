const _ = require('lodash');

class Bottles {
  verse(number) {
    const bottleNumber = BottleNumber.for(number);
    return (
      `${_.capitalize(bottleNumber.toString())} of beer on the wall, ` +
      `${bottleNumber} of beer.\n` +
      bottleNumber.action() +
      `${bottleNumber.successor()} of beer on the wall.\n`
    );
  }
}

class BottleNumber {
  static for(number) {
    switch (number) {
      case 0:
        return new BottleNumber0(number);
      case 1:
        return new BottleNumber1(number);
      case 6:
        return new BottleNumber6(number);
      default:
        return new BottleNumber(number);
    }
  }

  constructor(number) {
    this.number = number;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }

  successor() {
    return BottleNumber.for(this.number - 1);
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
    return BottleNumber.for(99);
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

class BottleNumber6 extends BottleNumber {
  container() {
    return 'six-pack';
  }

  quantity() {
    return '1';
  }
}

export {Bottles, BottleNumber, BottleNumber0, BottleNumber1};
