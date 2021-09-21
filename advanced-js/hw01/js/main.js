class Employee {
  constructor(name, age, salary) {
    [this.name, this.age, this.salary] = [name, age, salary];
  } 
  
  set name(str) {
    this._name = str;
  }
  get name() {
    return this._name;
  }

  set age(int) {
    this._age = int;
  }
  get age() {
    return this._age;
  }

  set salary(int) {
    this._salary = int;
  }
  get salary() {
    return this._salary;
  }
}

class Programmer extends Employee {
  constructor (name, age, salary, lang = []) {
    super(name, age, salary);
    this.lang = Array.from(new Set(lang));
  }

  set salary(num) {
    this._salary = num;
  }
  get salary() {
    return this._salary * 3;
  }
}

class EmployesList extends Array {
  constructor(arr) {
    if (arr) {
      super(arr);
    } else {
      super();
    }
  }

  showStats() {
    this.forEach(e => console.log(
    `Name: ${e.name}, age: ${e.age}, salary: ${e.salary}${e.lang ? ', langs: ' + e.lang.join(', ') : ''}`));
  } 
}

const employes = new EmployesList(new Employee('Jhon', 35, 2500));
employes.push(new Programmer('Doe', 37, 3000, ['English', 'Spanish']));
employes.push(new Programmer('Bar', 32, 2750, ['Ukrainian', 'Japanese']));

employes.showStats();