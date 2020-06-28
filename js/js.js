document.getElementById('batman').addEventListener('click',
  () => window.open('../batman/index.html', '_blank'));
document.getElementById('yoga-india').addEventListener('click',
  () => window.open('../yoga-india/index.html', '_blank'));

document.querySelectorAll('.list__item')
  .forEach(i => {
    i.addEventListener('mouseenter', e => {
      e.target.style.opacity = 0.9;
    });
    i.addEventListener('mouseleave', e => {
      e.target.style.opacity = 1;
    });
  });
