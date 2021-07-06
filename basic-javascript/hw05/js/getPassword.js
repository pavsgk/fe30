const validateDate = (date) => {
  if (date === null) return null;
  if (!new RegExp(/^\d+(\.\d+)*$/).test(date)) return false;
  date = date.split('.')
  if (date.length !== 3
    || date[0].length !== 2
    || date[1].length !== 2
    || date[2].length !== 4) return false;
  return new Date(date[2], date[1] - 1, date[0]);
}

const createNewUser = (firstName, lastName, birthday) => {
  if (firstName === undefined 
      || lastName === undefined 
      || birthday === undefined
      || String(firstName).trim() === '' 
      || String(lastName).trim() === ''
      || birthday === false) {
    firstName = prompt('Name?');
    lastName = prompt('Lastname?');
    birthday = validateDate(prompt('Enter birthday (dd.mm.yyyy)'));
    if (firstName === null || lastName === null || birthday === null) return null;
    return createNewUser(firstName, lastName, birthday);
  }
  return { 
    firstName, 
    lastName,
    birthday,
    getLogin() {
      return `${this.firstName[0]}${this.lastName}`.toLocaleLowerCase();
    },
    getAge() {
      return Number(new Date(Date.now() - birthday).getFullYear()) - 1970;
    },
    getPassword() {
      return `${this.firstName[0].toUpperCase()}${this.lastName.toLowerCase()}${this.birthday.getFullYear()}`;
    },
    set setFirstName(n) {
      Object.defineProperty(this, 'firstName', {
        value: n
      });
    },
    set setLastName(n) {
      Object.defineProperty(this, 'lastName', {
        value: n
      });
    },  
  };
}



const newUser = createNewUser();
Object.defineProperties(newUser, {
  'firstName': {
    writable: false
  },
  'lastName': {
    writable: false
  },
});

console.log(newUser);
console.log(newUser.getAge());
console.log(newUser.getPassword());