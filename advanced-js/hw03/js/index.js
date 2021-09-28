import {
  clients1,
  clients2,
  characters,
  user1,
  satoshi2018,
  satoshi2019,
  satoshi2020,
  books,
  bookToAdd,
  employee,
  array
} from "./data.js";

// 1
const clientsAll = [...clients1, ...clients2];
console.log(clientsAll);

// 2
const charactersShortInfo = characters.map(({
  name,
  lastName,
  age
}) => ({
  name,
  lastName,
  age
}));
console.log(charactersShortInfo);

// 3
const {
  name,
  years: age,
  isAdmin = false
} = user1;
console.log(name, age, isAdmin);

// 4
const fullProfile = {
  ...satoshi2018,
  ...satoshi2019,
  ...satoshi2020
}
console.log(fullProfile);

// 5
const newLib = [...books, bookToAdd];
console.log(newLib);

// 6
const newEmployee = {
  ...employee,
  age: 40,
  salary: '$20'
}
console.log(newEmployee);

// 7
const [value, showValue] = array;

alert(value);
alert(showValue());