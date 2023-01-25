const projects = ['yoga-india', 'todo', 'pixi-figures', 'batman', 'tetris']

projects.forEach((project) => {
  document
    .getElementById(project)
    .addEventListener('click', () =>
      window.open(`https://trainymonked.github.io/${project}`, '_blank')
    )
})

document.querySelectorAll('.list__item').forEach((i) => {
  i.addEventListener('mouseenter', (e) => {
    e.target.firstElementChild.style.opacity = 0.5
  })
  i.addEventListener('mouseleave', (e) => {
    e.target.firstElementChild.style.opacity = 1
  })
})
