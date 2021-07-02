class Student {
  constructor() {
    [this.name, this.lastName] = prompt('Введите имя и фамилию').split(' ');
    this.table = [];
    let stop = false;
    let iter = 1;
    while (!stop) {
      let inp;
      do {
        inp = prompt(`Введите ${iter} оценку:`);
        if (inp === null) {
          stop = true;
          break;
        }
      } while (isNaN(inp) || inp.trim() === '')
      if (inp === null) {
        break;
      } else {
        this.table.push(+inp);
        iter++;
      }
    }
  }
  getResult () {
    let result;
    if (!this.table.length) {
      return 'Нет оценок';
    }
    if (Math.min(...this.table) > 4) result = 'Студент переведен на следующий курс';
    if (this.table.reduce( (acc, x) => acc + x ) / this.table.length > 7) result = 'Студенту назначена стипендия';
    return !result ? 'Недостаточный бал' : result;
  }
}

const student = new Student();
console.log(student.getResult());