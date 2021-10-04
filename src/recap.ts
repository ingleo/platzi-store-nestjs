const myName = 'Nicolas';
const myAge = 12;
const add = (a: number, b: number) => {
  return a + b;
};
add(3, 2);

class Persona {
  /*  private age: number;
  private name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  } */

  constructor(private age: number, private name: string) {}

  getSummary() {
    return `My name is ${this.name} and my age is ${this.age}`;
  }
}

const nicolas = new Persona(32, 'Leonardo');
nicolas.getSummary();
