$(document).ready(() => {
  // show top-button
  const toTopButton = document.querySelector('.to-top');
  $(window).scroll(() => {
    if (window.pageYOffset < window.screen.height) {
      $(toTopButton).hide();
    } else {
      $(toTopButton).show();
    }
  })

  // attach events on 'jump menu'
  $('.jump').on('click', function (evt) {
    evt.preventDefault();
    const target = document.getElementsByName(`${$(this).attr('href')}`.slice(1))[0];
    target.scrollIntoView({
      behavior: 'smooth'
    });
  })

  // hide section button
  $('#toggle-hide').on('click', () => $('#to-hide').slideToggle());
});