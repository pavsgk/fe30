const serviceTabSelector = new TabSelector('.service-tabs', '.service-posts', servicePosts);
const workCardFilter = new CardFilter('.work-tabs', '.work-cards', workServerEmu.next().value);
const clientsSay = new ClientsSay('.clients-name', '.clients-prof', '.clients-text', '.clients-selectors', '.clients-bigpics', '.clients-selectors', '.clients-button.prev', '.clients-button.next', clientsQuotations);

document.querySelector('.work .button').addEventListener('click', event => {
  event.currentTarget.disabled = true;
  setTimeout((current => {
    const request = workServerEmu.next();
    if (request.value) {
      workCardFilter.arr.push(...request.value);
      workCardFilter.showCards();
    }
    if (request.done && request.value) {
      try {
        fadeIO(current, ((e) => e.style.visibility = 'hidden').bind(this, current) , 'hide', 1000);
      } catch {
        current.style.visibility = 'hidden';
      }
    }
    current.disabled = false;
  }).bind(this, event.currentTarget), 2000)
});