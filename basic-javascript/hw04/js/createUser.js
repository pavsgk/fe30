function createNewUser () {
  let firstName = '';
  let lastName = '';
  this.setFirstName = function () {    
    firstName = prompt('Enter your first name');
  }
  this.setLastName = function () {    
    lastName = prompt('Enter your last name');
  }
  this.getLogin = function () {
    return `${firstName[0]}${lastName}`.toLowerCase();
  }
  this.getFirstName = function () {
    return firstName;
  }
  this.getLastName = function () {
    return lastName;
  }

  this.setFirstName();
  this.setLastName();
}

let newUser = new createNewUser();
console.log(newUser.getLogin());