class Car {
    constructor(color, roda, body, merk) { 
      this.warna = color;
      this.Bumble = roda;
      this.merk = merk;
      this.body = body
    }
    true(){
        this.quality = "nice";
    }
    false(){
        this.quality = "bad";
    }
    getInfo() {
      return `color : ${this.warna},roda : ${this.Bumble},merek: ${this.merk},sasis: ${this.body}, quality: ${this.quality}`;
    }
  }

  const fgh = new Car("red", 4,"baja", "niisan");
  fgh.true();
  console.log(fgh.getInfo());