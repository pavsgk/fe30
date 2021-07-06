class Student {
  constructor() {
    [this.name, this.lastName] = prompt('Введите имя и фамилию').split(' ');
    this.table = {};
    this.marks = [];
    let stop = false;
    let iter = 1;
    while (!stop) {
      let mark, subj
      do {
        subj = prompt(`Введите ${iter} предмет:`)
        mark = prompt(`Введите ${iter} оценку:`);
        if (mark === null || subj === null) {
          stop = true;
          break;
        }
      } while (isNaN(mark) || mark.trim() === '' || subj.trim() === '')
      if (mark === null || subj === null) {
        break;
      } else {
        this.table[subj] = mark;
        iter++;
      }
    }
    this.marks = Object.values(this.table);
  }
  getResult () {
    let result;
    if (!this.marks) {
      return 'Нет оценок';
    }
    if (Math.min(...this.marks) > 4) result = 'Студент переведен на следующий курс';
    if (this.marks.reduce( (acc, x) => acc + x ) / this.marks.length > 7) result = 'Студенту назначена стипендия';
    return !result ? 'Недостаточный бал' : result;
  }
}

const student = new Student();
console.log(student.getResult());