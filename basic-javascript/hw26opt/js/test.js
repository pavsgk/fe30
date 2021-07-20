function addRandomContent() {
  const sel = document.querySelector('#selector');
  const con = document.querySelector('#content');
  const newSelector = document.createElement('li');
  newSelector.innerText = Math.floor(Math.random() * 1000);
  newSelector.classList.add('tabs-title');
  sel.appendChild(newSelector);
  const newContent = document.createElement('li');
  newContent.style.display = 'none';
  newContent.innerText = String('' + Math.floor(Math.random() * 100000000000000) + ' ' + Math.floor(Math.random() * 100000000000)).repeat(10);
  con.appendChild(newContent);
  tabs.rebuild();
}