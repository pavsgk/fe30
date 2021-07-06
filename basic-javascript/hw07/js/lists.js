function dropList (arr, parent = document.body) {
  if (parent.tagName !== 'UL') {
    const oldParent = parent;
    parent = document.createElement('UL');
    oldParent.appendChild(parent)
  }
  arr.map( itm => {
    if (typeof(itm) !== 'object') {
      const newLi = document.createElement('LI');
      newLi.innerText = String(itm);
      parent.appendChild(newLi);
    } else {
      const newUl = document.createElement('UL');
      parent.appendChild(newUl);
      return dropList(itm, newUl);
    }
  });
}

dropList(["Kharkiv", "Kiev", ["Borispol", ["Artemivka", "Ivankiv", "Gorodivka"]], "Odessa", "Lviv", ['Rudne', 'Zymna voda'], "Dnieper"]);