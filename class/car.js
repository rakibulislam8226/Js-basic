export default class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  info(){
    console.log(`Your name ${this.name} and age ${this.year}`);
  }
}



class Model extends Car {
  constructor(name, year, mod) {
      super(name, year);
      this.mod = mod;
  }
  info() {
      super.info();
      console.log(`model is ${this.mod.join(' -- ')}`);
  }
}
