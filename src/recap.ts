const myName = 'Steven';
const myAge = 23;
const suma = (a: number, b:number) => {
  return a+b;
}
suma(12,12);

class Product{
  constructor(private name: String,private quantity:number){}

  getSummary(){
    return `this name is ${this.name}`;
  }
}

const product = new Product("Steven",20);
