const _ = require("lodash");
const { downTo } = require("./helpers");

class Bottles {
  constructor(verseTemplate = BottleVerse) {
    this.verseTemplate = verseTemplate;
  }

  song() {
    return this.verses(99, 0);
  }

  verses(starting, ending) {
    return downTo(starting, ending)
      .map((i) => this.verse(i))
      .join("\n");
  }

  verse(number) {
    return this.verseTemplate.lyrics(number);
  }
}

class BottleVerse {
  constructor(bottleNumber) {
    this.bottleNumber = bottleNumber;
  }

  static lyrics(number) {
    return new BottleVerse(BottleNumber.for(number)).lyrics();
  }

  lyrics() {
    return (
      _.capitalize(`${this.bottleNumber} of beer on the wall, `) +
      `${this.bottleNumber} of beer.\n` +
      `${this.bottleNumber.action()}, ` +
      `${this.bottleNumber.successor()} of beer on the wall.\n`
    );
  }
}

class BottleNumber {
  static for(number) {
    let bottleNumberClass;
    switch (number) {
      case 0:
        bottleNumberClass = BottleNumber0;
        break;
      case 1:
        bottleNumberClass = BottleNumber1;
        break;
      case 6:
        bottleNumberClass = BottleNumber6;
        break;
      default:
        bottleNumberClass = BottleNumber;
        break;
    }

    return new bottleNumberClass(number);
  }

  constructor(number) {
    this.number = number;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }

  quantity() {
    return this.number.toString();
  }

  container() {
    return "bottles";
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around`;
  }

  pronoun() {
    return "one";
  }

  successor() {
    return BottleNumber.for(this.number - 1);
  }
}

class BottleNumber0 extends BottleNumber {
  quantity() {
    return "no more";
  }

  action() {
    return "Go to the store and buy some more";
  }

  successor() {
    return BottleNumber.for(99);
  }
}

class BottleNumber1 extends BottleNumber {
  container() {
    return "bottle";
  }

  pronoun() {
    return "it";
  }
}

class BottleNumber6 extends BottleNumber {
  quantity() {
    return "1";
  }

  container() {
    return "six-pack";
  }
}

export { Bottles, BottleNumber, BottleNumber0, BottleNumber1 };
