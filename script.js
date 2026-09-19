const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menu?.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('mobile-open'));
});

document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
