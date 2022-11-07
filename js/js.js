document.getElementById('batman').addEventListener('click',
  () => window.open('../batman/index.html', '_blank'));
document.getElementById('yoga-india').addEventListener('click',
  () => window.open('../yoga-india/index.html', '_blank'));
document.getElementById('tetris').addEventListener('click',
  () => window.open('../tetris/index.html', '_blank'));
document.getElementById('pixi-figures').addEventListener('click',
  () => window.open('../pixi-figures/index.html', '_blank'));

document.querySelectorAll('.list__item')
  .forEach(i => {
    i.addEventListener('mouseenter', e => {
      e.target.style.opacity = 0.9;
    });
    i.addEventListener('mouseleave', e => {
      e.target.style.opacity = 1;
    });
  });
