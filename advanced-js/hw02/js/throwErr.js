const books = [{
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70
  },
  {
    author: "Скотт Бэккер",
    name: "Воин-пророк",
  },
  {
    name: "Тысячекратная мысль",
    price: 70
  },
  {
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70
  },
  {
    author: "Дарья Донцова",
    name: "Детектив на диете",
    price: 40
  },
  {
    author: "Дарья Донцова",
    name: "Дед Снегур и Морозочка",
  }
];

const hasMissingKeys = (obj, keys) => keys.map(e => obj.hasOwnProperty(e) ? false : e).filter(e => e).join(', ');

const showList = ((target) => {
  const container = document.querySelector(target);

  return function (library) {
    const outputList = library.map(e => {
      try {
        const missingKeys = hasMissingKeys(e, ['name', 'author', 'price']);
        if (missingKeys) throw new Error(`Missing prop: ${missingKeys}`);
        return `<li><b>${e.name}</b> - ${e.author}<br><sub>$${e.price}</sub></li>`;
      } catch (err) {
        console.error(err);
      }
    }).join('')
    container.innerHTML = `<ul>${outputList}</ul>`;
  }

})('#root');

showList(books);