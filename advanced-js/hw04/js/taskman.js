export default {
  preLoader: document.querySelector('.lds-hourglass'),
  timer: null,
  timeout: 500,
  newTask() {
    clearTimeout(this.timer);
    this.preLoader.style.display = 'block';
    this.timer = setTimeout(() => {
      this.preLoader.style.display = 'none';
    }, this.timeout);
  }
}