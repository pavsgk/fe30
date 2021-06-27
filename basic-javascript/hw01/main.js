const ask = (oldName = '', oldAge = '') => {
  let name = prompt('name?', oldName);
  if (!name) {
    return ask(name, oldAge);
  }
  let age = prompt('age?', oldAge);
  if (isNaN(Number(age)) || age === '' || age === null) {
    return ask(name, age);
  }
  return {name: name, age: age};
}

const notAllowed = () => {
  alert('You are not allowed to visit this website');
}

const user = ask();

switch (true) {
  case (user.age < 18):
    notAllowed();
    break;
  case (user.age >= 18 && user.age <= 22):
    if(!confirm('Are you sure you want to continue?')) {
      notAllowed();
      break;
    }
  default:
    alert(`welcome ${user.name}`);
}

console.log('Success');