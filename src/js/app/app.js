document.addEventListener('DOMContentLoaded', () => {
  const why = new SimpleBar(document.querySelector('aside'));

  //Menu
  const otterNav = document.querySelector('#otter-nav');
  const otterBtn = document.querySelector('#otter-btn');
  const overlay = document.querySelector('.main-overlay');
  const navItem = document.querySelectorAll('.navigation__item');

  otterBtn.addEventListener('click', () => {
    otterNav.classList.add('navigation__active');
    overlay.classList.remove('hidden');
  });

  overlay.addEventListener('click', () => {
    otterNav.classList.remove('navigation__active');
    overlay.classList.add('hidden');
  });

  navItem.forEach((el) => {
    el.addEventListener('click', () => {
      otterNav.classList.remove('navigation__active');
      overlay.classList.add('hidden');
    });
  });

}, false);