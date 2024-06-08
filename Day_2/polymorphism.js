class Car {
    constructor(color, roda, body, merk) { 
      this.warna = color;
      this.Bumble = roda;
      this.merk = merk;
      this.body = body
    }
    getInfo() {
      return `color : ${this.warna},roda : ${this.Bumble},merek: ${this.merk},sasis: ${this.body}`;
    }
  }

  class newCar extends Car {
    constructor(warna, Bumble, merk, body, price){
    super(warna,Bumble,merk,body);
    this.harga = price
    }
    getInfo() {
        return `${super.getInfo()} , dan harganya ${this.harga}`
    }
  }

  const aku = new newCar("red", 4, "baja", "niisan", "mahal");
  console.log(aku.getInfo());