class Car {
  constructor(name) {
    this.name = name;
  }

  drive = () => {
    console.log("drive");
  };
}

const car = new Car("benz");

console.log(car);
