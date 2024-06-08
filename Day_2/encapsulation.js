class Car {
    #color = "yellow"; 
    constructor(color, roda, body, merk) { 
      this.#color = "yellow";
      this.Bumble = roda;
      this.merk = merk;
      this.body = body
    }
    getInfo() {
      return `color : ${this.#color},roda : ${this.Bumble},merek: ${this.merk},sasis: ${this.body}`;
    }
  }
  const car1 = new Car("red", 4, "plastik", "niisan");
  console.log(car1.getInfo());