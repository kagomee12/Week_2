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
  
  const car1 = new Car("black", "2", "suzuki", "kosong");
  console.log(car1.getInfo());
  
  const car2 = new Car();
  console.log(car2.getInfo());
  