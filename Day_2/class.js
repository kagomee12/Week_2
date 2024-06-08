class Car {
    constructor(color, roda, merk, type) {

      this.warna = color;
      this.roda = roda;
      this.merk = merk;
      this.sasis = type;
    }
  
    getInfo() {
      return `This car have ${this.warna}, ${this.roda}, ${this.merk}, ${this.sasis}`;
    }
  }