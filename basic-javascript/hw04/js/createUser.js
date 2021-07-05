const createNewUser = (firstName, lastName) => {
  if (firstName === undefined 
      || lastName === undefined 
      || String(firstName).trim() === '' 
      || String(lastName).trim() === '') {
    firstName = prompt('Name?');
    lastName = prompt('Lastname?');
    if (firstName === null || lastName === null) return null;
    return createNewUser(firstName, lastName);
  }
  return { 
    firstName, 
    lastName,
    getLogin() {
      return `${this.firstName[0]}${this.lastName}`.toLocaleLowerCase();
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

console.log(newUser.getLogin());