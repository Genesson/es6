const secretNumber = 28;
// secretNumber = 40;

const people = {
  nome: 'Test',
  age: 52
}

// people = {
//   name: 'Test 2',
//   age: 40
// }

console.log(people);

people.age = 30;
console.log(people);

Object.freeze(people);
people.age = 35;
console.log(people);