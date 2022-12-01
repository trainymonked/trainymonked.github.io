document.getElementById('batman').addEventListener('click',
  () => window.open('https://trainymonked.github.io/batman', '_blank'));
document.getElementById('yoga-india').addEventListener('click',
  () => window.open('https://trainymonked.github.io/yoga-india', '_blank'));
document.getElementById('tetris').addEventListener('click',
  () => window.open('https://trainymonked.github.io/tetris', '_blank'));
document.getElementById('pixi-figures').addEventListener('click',
  () => window.open('https://trainymonked.github.io/pixi-figures', '_blank'));

document.querySelectorAll('.list__item')
  .forEach(i => {
    i.addEventListener('mouseenter', e => {
      e.target.firstElementChild.style.opacity = 0.5;
    });
    i.addEventListener('mouseleave', e => {
      e.target.firstElementChild.style.opacity = 1;
    });
  });
